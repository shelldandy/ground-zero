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
  .pipe gulp.dest config.exportPath + '/js/'
  .pipe browserSync.reload(stream : true)

## Production

gulp.task 'production:scripts', ->
  gulp.src config.scriptFiles
  .pipe $.plumber(errorHandler: onError)
  .pipe $.concat 'vendor.js'
  .pipe $.uglify
    preserveComments : 'license'
  .pipe gulp.dest config.exportPath + '/js/'
  .pipe browserSync.reload(stream : true)
