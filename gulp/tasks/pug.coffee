'use strict'
gulp          = require 'gulp'
browserSync   = require 'browser-sync'
onError       = require './error'
plugins       = require 'gulp-load-plugins'
$             = plugins()
config        = require './config'


gulp.task 'pug', ->
  gulp.src './src/pug/**/!(_)*.pug'
  .pipe $.plumber(errorHandler: onError)
  .pipe $.pug
    pretty : true
    basedir : './src/pug'
  .pipe gulp.dest config.exportPath + '/'
  .pipe browserSync.reload
    stream: true

## PRODUCTION  ##
gulp.task 'production:pug', ->
  gulp.src './src/pug/**/!(_)*.pug'
  .pipe $.pug
    basedir : './src/pug'
  .pipe gulp.dest config.exportPath + '/'
  .pipe browserSync.reload
    stream: true
