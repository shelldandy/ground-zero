'use strict';

const gulp          = require('gulp');
const plugins       = require('gulp-load-plugins');
const $             = plugins();
const config        = require('../config');
const when          = require('gulp-if');
// Check if gulp scripts --prod or --production has been added to the task
const argv          = require('yargs').argv;
const production    = argv.prod || argv.production;

const destination = `${config.distFolder}/assets/stylesheets`;


gulp.task('sass', done => {
  return gulp.src('./src/sass/main.sass')
  .pipe( when( !production, $.sourcemaps.init() ) )
  .pipe( $.sass({
    includePaths : config.sassIncludes
  }) )
  .on('error', $.sass.logError )
  .pipe( $.autoprefixer({
    browsers : ['last 2 versions']
  }) )
  .pipe( $.groupCssMediaQueries() )
  .pipe( $.csscomb() )
  .pipe( when( !production, $.sourcemaps.write('./') ) )
  .pipe( gulp.dest(destination) )

  .pipe( when( production, $.rename({suffix : '.min'}) ) )
  .pipe( when( production, $.uncss({
    html : config.uncssHtml,
    ignore : config.uncssIgnore
  }) ) )
  .pipe( when( production, $.cssnano() ) )
  .pipe( when(production, gulp.dest(destination) ) )
  // Finally make it uber small with gzip
  .pipe( when( production, $.gzip() ) )
  .pipe( when( production, gulp.dest(destination) ) );
  done();

});
