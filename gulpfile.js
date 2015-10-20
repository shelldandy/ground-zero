// Seamos estrictos pls
'use strict';

// Lista de plugins que hacen que todo funcione, valen mil
var gulp        = require('gulp'),
    jade        = require('gulp-jade'),
    sass        = require('gulp-sass'),
    prefix      = require('gulp-autoprefixer'),
    sourcemaps  = require('gulp-sourcemaps'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    browserSync = require('browser-sync'),
    imagemin    = require('gulp-imagemin'),
    pngquant    = require('imagemin-pngquant'),
    clean       = require('del');

// Conjunto de archivos de js para ser vomitados como uno solo
var jsFiles = ['./bower_components/vivus/dist/vivus.js'];


/************************************
 Let's make some motherfucking money
 ************************************/

// Compilar archivos jade
gulp.task('jade', function() {
  return gulp.src('./src/jade/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('./dist'))
  .pipe(browserSync.reload({stream:true}));
});

// Compilar archivo sass, crear sourcemap y recargar servidor
gulp.task('sass', function() {
  return gulp.src('./src/sass/style.sass')
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths  : ['sass'],
      onError       : browserSync.notify,
      outputStyle   : 'compressed'
    }))
    .pipe(prefix({
      browsers : ['last 2 versions']
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.reload({stream:true}));
});

// Concatenar y minificar js. Crea sourcemap porque fuck yeah y reload
gulp.task('scripts', function(){
  return gulp.src(jsFiles)
  .pipe(sourcemaps.init())
  .pipe(concat('main.js'))
  .pipe(uglify())
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./dist/js/'))
  .pipe(browserSync.reload({stream:true}));
});

// Optimizar imagenes https://www.npmjs.com/package/gulp-imagemin/ y reload
gulp.task('imagemin', function () {
  return gulp.src('./src/img/**/*')
  .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
  }))
  .pipe(gulp.dest('./dist/img/'))
  .pipe(browserSync.reload({stream:true}));
});

// Vigila cambios de jade, sass js e imágenes, ejecuta sus respectivas cosas y reload
gulp.task('watch', function() {
  gulp.watch('src/jade/**', ['jade']);
  gulp.watch('src/sass/**', ['sass']);
  gulp.watch(jsFiles,       ['scripts']);
  gulp.watch('src/img/**', ['imagemin']);
});


// Ahora vamos a crear el servidor que va a vigilar la carpeta de dist así vemos lo que vería el usuario final
gulp.task('browser-sync',['jade', 'sass', 'scripts'], function() {
  return browserSync.init(['./dist/css/*.css', './dist/js/*.js', './dist/img/**/*'] ,{
    server : {
      baseDir : './dist/'
    },
    // El amor día oficial
    port : 1705,
    ui : {
      port: 1706
    }
  });
});

// Un archivo hermoso de limpieza mu
gulp.task('clean', function() {
  clean(['./dist/**', '!./dist']);
});


gulp.task('default',['browser-sync','watch']);
