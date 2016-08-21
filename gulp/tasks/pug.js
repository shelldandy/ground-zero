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

const devLocals = {
  base : '',
  extension : '',
  productionMode : false
};

const prodLocals = {
  base : config.productionBase,
  extension : config.productionExtension,
  productionMode : true
};


gulp.task('pug', done => {
  return gulp.src('./src/pug/**/!(_)*.pug')
  .pipe( $.plumber( {errorHandler : onError} ) )
  .pipe( when( !production, $.pug({
    pretty : true,
    basedir : './src/pug',
    locals : devLocals
  }) ))
  .pipe( when(production, $.pug({
    basedir : './src/pug',
    locals : prodLocals
  }) ) )
  .pipe( gulp.dest(config.distFolder) );
  done();
});
