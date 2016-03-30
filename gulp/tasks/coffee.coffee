'use strict'
gulp          = require 'gulp'
browserSync   = require 'browser-sync'
onError       = require './error'
plugins       = require 'gulp-load-plugins'
$             = plugins()


gulp.task 'coffee', ->
  gulp.src './src/coffee/**/*.coffee'
  .pipe $.plumber(errorHandler: onError)
  .pipe $.sourcemaps.init()
  .pipe $.coffee()
  .pipe $.concat 'app.js'
  .pipe $.sourcemaps.write './'
  .pipe gulp.dest './dist/js/'
  .pipe browserSync.reload(stream : true)
