'use strict';
const gulp          = require('gulp');
const plugins       = require('gulp-load-plugins');
const $             = plugins();
const config        = require('../config');


const assets = () => {
  return gulp.src(config.assets)
  .pipe( gulp.dest( `${config.distFolder}/assets/misc` ) );
};

gulp.task('assets', assets);

module.exports = assets;
