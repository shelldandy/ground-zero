'use strict';

const gulp          = require('gulp');
const plugins       = require('gulp-load-plugins');
const $             = plugins();
const config        = require('../config');
const onError       = require('./error');
const when          = require('gulp-if');

// Check if gulp scripts --prod or --production has been added to the task
const argv          = require('yargs').argv;
const production    = argv.prod || argv.production;

const destination = `${config.distFolder}/assets/js`;

gulp.task('scripts', done => {
  return gulp.src(config.scriptFiles)
  // Error Plumber to catch anything
  .pipe( $.plumber( {errorHandler : onError} ) )
  .pipe( when( !production, $.sourcemaps.init() ) )
  .pipe($.concat('main.js'))
  .pipe( when( !production, $.sourcemaps.write('./') ) )
  .pipe( gulp.dest(destination) )

  // All production stuff here

  // Rename file to .min and uglify that stuff
  .pipe( when(production, $.rename({suffix : '.min'})) )
  .pipe( when(production, $.uglify({
    preserveComments : 'license'
  }) ) )
  .pipe( when( production, gulp.dest(destination) ) )
  // Finally make it uber small with gzip
  .pipe( when( production, $.gzip() ) )
  .pipe( when( production, gulp.dest(destination) ) );
  done();
});
