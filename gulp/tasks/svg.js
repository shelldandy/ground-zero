'use strict';
const gulp          = require('gulp');
const plugins       = require('gulp-load-plugins');
const $             = plugins();
const config        = require('../config');

gulp.task('svg:inline', () => {
  return gulp.src('./src/svg/inline/*.svg')
  .pipe( $.svgmin({
    plugins : [{
      removeStyleElement : true
    }, {
      removeAttrs : {
        attrs : ['fill', 'stroke', 'fill.*', 'stroke.*']
      }
    }]
  }) )
  .pipe( $.svgstore( {inlineSvg : true} ) )
  .pipe( gulp.dest('./src/pug/layouts/includes') );
});


gulp.task('svg:external', () => {
  return gulp.src('./src/svg/external/*.svg')
  .pipe( $.svgmin({
    plugins : [{
      removeStyleElement : true
    }, {
      removeAttrs : {
        attrs : ['fill', 'stroke', 'fill.*', 'stroke.*']
      }
    }]
    // Uncomment below for pretty SVG output
    // ,js2svg: {
    //   pretty: true
    // }
  }) )
  .pipe( $.svgstore() )
  .pipe( $.rename('symbols.svg') )
  .pipe( gulp.dest(`${config.distFolder}/assets/svg`) );
});


gulp.task('svg', gulp.parallel('svg:inline', 'svg:external'));
