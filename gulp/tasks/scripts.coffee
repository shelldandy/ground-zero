'use strict'
gulp          = require 'gulp'
browserSync   = require 'browser-sync'
config        = require './config'
onError       = require './error'
plugins       = require 'gulp-load-plugins'
$             = plugins()


gulp.task 'scripts', ->
  gulp.src config.scriptFiles
  .pipe $.plumber(errorHandler: onError)
  .pipe $.sourcemaps.init()
  .pipe $.concat 'vendor.js'
  .pipe $.sourcemaps.write './'
  .pipe gulp.dest './dist/js/'
  .pipe browserSync.reload(stream : true)
