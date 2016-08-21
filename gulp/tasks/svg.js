'use strict';
const gulp          = require('gulp');
const plugins       = require('gulp-load-plugins');
const $             = plugins();
const config        = require('../config');
const onError       = require('./error');

gulp.task('svg:inline', done => {
  return gulp.src('./src/svg/inline/*.svg')
  .pipe( $.plumber( {errorHandler : onError} ) )
  .pipe( $.svgmin({
    plugins : [{
      removeStyleElement : true
    }, {
      removeAttrs : {
        attrs : ['fill', 'stroke']
      }
    }]
  }) )
  .pipe( $.svgstore( {inlineSvg : true} ) )
  .pipe( gulp.dest('./src/pug/layouts/includes') );
  done();
});
