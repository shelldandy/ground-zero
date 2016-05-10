'use strict'
gulp          = require 'gulp'
browserSync   = require 'browser-sync'
onError       = require './error'
plugins       = require 'gulp-load-plugins'
$             = plugins()
config        = require './config'


gulp.task 'jade', ->
  gulp.src './src/jade/**/!(_)*.jade'
  .pipe $.plumber(errorHandler: onError)
  .pipe $.accord 'jade',
    pretty : true
    basedir : './src/jade'
  .pipe gulp.dest config.exportPath + '/'
  .pipe browserSync.reload
    stream: true

## PRODUCTION  ##
gulp.task 'production:jade', ->
  gulp.src './src/jade/**/!(_)*.jade'
  .pipe $.accord 'jade',
    basedir : './src/jade'
  .pipe gulp.dest config.exportPath + '/'
  .pipe browserSync.reload
    stream: true
