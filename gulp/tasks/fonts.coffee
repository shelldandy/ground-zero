'use strict'
gulp          = require 'gulp'
browserSync   = require 'browser-sync'
onError       = require './error'
plugins       = require 'gulp-load-plugins'
$             = plugins()
config        = require './config'


gulp.task 'fonts', ->
  gulp.src config.fonts
  .pipe $.plumber(errorHandler: onError)
  .pipe $.cache($.cssfont64())
  .pipe $.concat('fonts.css')
  .pipe gulp.dest config.exportPath + '/css/'
