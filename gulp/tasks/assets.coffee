'use strict'
gulp          = require 'gulp'
browserSync   = require 'browser-sync'
onError       = require './error'
plugins       = require 'gulp-load-plugins'
$             = plugins()
config        = require './config'


gulp.task 'assets', ->
  gulp.src config.assets
  .pipe $.plumber(errorHandler: onError)
  .pipe gulp.dest config.exportPath + '/assets/'
  .pipe browserSync.reload(stream : true)
