'use strict'
gulp          = require 'gulp'
browserSync   = require 'browser-sync'
onError       = require './error'
plugins       = require 'gulp-load-plugins'
$             = plugins()


gulp.task 'jade', ->
  gulp.src './src/jade/**/!(_)*.jade'
  .pipe $.plumber(errorHandler: onError)
  .pipe $.accord 'jade',
    pretty : true
    basedir : './src/jade'
  .pipe gulp.dest './dist'
  .pipe browserSync.reload
    stream: true
