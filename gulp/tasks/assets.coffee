'use strict'
gulp          = require 'gulp'
browserSync   = require 'browser-sync'
onError       = require './error'
plugins       = require 'gulp-load-plugins'
$             = plugins()


gulp.task 'assets', ->
  gulp.src './src/assets/**/*'
  .pipe $.plumber(errorHandler: onError)
  .pipe gulp.dest './dist/assets/'
  .pipe browserSync.reload(stream : true)
