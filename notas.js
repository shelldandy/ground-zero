
// Primero definimos y asociamos nuestras variables a usar porque Node.js
var gulp        = require('gulp'),
    // Jade
    jade        = require('gulp-jade'),
    // Sass con autoprefixer
    sass        = require('gulp-sass'),
    prefix      = require('gulp-autoprefixer'),
    // Para todas tus necesidades javascriptásticas
    ts          = require('gulp-typescript'),
    sourcemaps  = require('gulp-sourcemaps'),
    uglify      = require('gulp-uglify'),
    // I need image backup!!
    imagemin    = require('gulp-imagemin'),
    pngquant    = require('imagemin-pngquant'),
    newer       = require('gulp-newer'),
    // La tele pues
    browserSync = require('browser-sync'),
    // Cargamos a Github Pages y somos felices
    ghPages     = require('gulp-gh-pages'),
    // Y limpias tus desmadritos nene
    clean       = require('del');



// La Prueba loca
gulp.task('test', function() {
  console.log('🚀 Houston, todo en orden 🚀');
});


// Jade
gulp.task('jade', function() {
  return gulp.src('./src/jade/**/!(_)*.jade') //esa es la clave para que funcione como Codekit yeh y no compile los archivos que inician con "_"
  .pipe(jade({
    pretty: true // cambiar a false para producción 🐶
  }))
  .pipe( gulp.dest('./dist') )
  .pipe(browserSync.reload({stream:true}));
});

// Sass
// Includes
var sassIncludes = ['./src/bower_components/modular-scale/stylesheets']; //acá podemos agregar más carpetas por ejemplo './bower-components/bootstrap' y así podemos importar cosas de manera muy fácil y directa ;) (http://fedojo.com/breakpoint-sass-configuration-and-how-to-use-it-gulp-js-include-paths/)

gulp.task('sass', function() {
  return gulp.src('./src/sass/**/!(_)*.sass')
  .pipe( sourcemaps.init() )
  .pipe( sass({
    includePaths : sassIncludes,
    outputStyle : 'nested'
  }))
  .pipe( prefix({
    browsers : ['last 2 versions']
  }))
  .pipe( sourcemaps.write('./') )
  .pipe( gulp.dest('./dist/css/') )
  .pipe(browserSync.reload({stream:true}));
});


// Typescript
gulp.task('scripts', function(){
  // Cuestiones de arranque para que jale el Typescript
  var tsProject = ts.createProject('./src/ts/tsconfig.json');
  var config = require('./src/ts/tsconfig.js')() ;
  var sourceTsFiles = [
    config.tsFiles,
    config.tdFiles
  ];
  // Acá hacemos nuestro flujo de trabajo inicial
  var tsResult =tsProject.src(sourceTsFiles)
    .pipe( sourcemaps.init() )
    .pipe( ts(tsProject) );

  // Y acá lo terminamos de exportar de manera hermosa
  return tsResult.js
    .pipe( sourcemaps.write('./') )
    .pipe( gulp.dest( config.tsOutput ) )
    .pipe(browserSync.reload({stream:true}));
});


// Optimización de imágenes on-the-go
gulp.task('imagemin', function () {
  return gulp.src('./src/img/**/*')
  // Con newer solo cambiamos las imágenes más recientes en lugar de todas morochas
  .pipe(newer('./dist/img/'))
  .pipe(imagemin({
      // https://www.npmjs.com/package/gulp-imagemin/
      progressive: true,
      multipass: true,
      svgoPlugins: [{
        // https://github.com/svg/svgo#what-it-can-do
        removeViewBox: false,
        removeDimensions : true
      }],
      use: [pngquant()]
  }))
  .pipe(gulp.dest('./dist/img/'))
  .pipe(browserSync.reload({stream:true}));
});

// browserSync llegó y la vida fue mejor
gulp.task('browsersync',['clean', 'jade', 'sass', 'scripts', 'imagemin'], function(){
  return browserSync.init({
    server : {
      baseDir : './dist'
    },
    port : 1705,
    ui : {
      port : 1706
    }
  });
});


// 👀 Vigilamos cambios de todo y aplicamos hermosamente
gulp.task('watch', function(){
  gulp.watch('src/jade/**', ['jade']);
  gulp.watch('src/sass/**', ['sass']);
  gulp.watch('src/ts/**', ['scripts']);
  gulp.watch('src/img/**', ['imagemin']);
});

gulp.task('default', ['browsersync', 'watch']);

// 🎓🦁🚀🍺🎉 Production Ready!!! 🎓🦁🚀🍺🎉

// Un archivo hermoso de limpieza mu
gulp.task('clean', function() {
  return clean(['./dist/**', '!./dist', './.publish']);
});


// Minimizar el HTML
gulp.task('productionHTML', function(){
  return gulp.src('./src/jade/**/!(_)*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./dist'));
});

// Minimizar el CSS
gulp.task('productionCSS', function(){
  return gulp.src('./src/sass/**/!(_)*.sass')
    .pipe( sass({
      includePaths : sassIncludes,
      outputStyle : 'compressed'
    }))
    .pipe( prefix({
      browsers : ['last 2 versions']
    }))
    .pipe(gulp.dest('./dist/css'));
});

// Minimizar y ofuscar el código
gulp.task('productionJS', function(){
  // Cuestiones de arranque para que jale el Typescript
  var tsProject = ts.createProject('./src/ts/tsconfig.json');
  var config = require('./src/ts/tsconfig.js')() ;
  var sourceTsFiles = [
    config.tsFiles,
    config.tdFiles
  ];
  // Acá hacemos nuestro flujo de trabajo inicial
  var tsResult =tsProject.src(sourceTsFiles)
    .pipe( ts(tsProject) );
  // Y acá lo terminamos de exportar de manera hermosa
  return tsResult.js
    .pipe(uglify({
      preserveComments : 'all'
    }))
    .pipe( gulp.dest( config.tsOutput ) )
    .pipe(browserSync.reload({stream:true}));
});

// Montamos toda la producción chingona
gulp.task('production', ['clean', 'productionHTML', 'productionCSS', 'productionJS', 'imagemin']);

// Subir a Github
gulp.task('deploy',['production'], function() {
  return gulp.src('./dist/**/*')
  .pipe(ghPages());
});

// Ocupar solo si sabes esto borra el directorio de .git ideal para usar realmente de base para nuevos proyectos
gulp.task('cleanGit', function(){
  clean(['./.git']);
});
