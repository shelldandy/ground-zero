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
        attrs : ['fill', 'stroke', 'fill.*', 'stroke.*']
      }
    }]
  }) )
  .pipe( $.svgstore( {inlineSvg : true} ) )
  .pipe( gulp.dest('./src/pug/layouts/includes') );
  done();
});


gulp.task('svg:externalFILE', done => {
  return gulp.src('./src/svg/external/*.svg')
  .pipe( $.plumber( {errorHandler : onError} ) )
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
  done();
});

gulp.task('svg:externalPNG', done => {
  return gulp.src('./src/svg/external/*.svg')
  .pipe( $.plumber( {errorHandler : onError} ) )
  .pipe( $.svg2png() )
  .pipe( gulp.dest(`${config.distFolder}/assets/svg`) );
  done();

});

gulp.task('svg:external', gulp.parallel( 'svg:externalFILE', 'svg:externalPNG'));

gulp.task('svg', gulp.parallel('svg:inline', 'svg:external'));
