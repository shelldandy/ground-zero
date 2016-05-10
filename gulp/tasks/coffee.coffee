'use strict'
gulp          = require 'gulp'
browserSync   = require 'browser-sync'
onError       = require './error'
plugins       = require 'gulp-load-plugins'
$             = plugins()
config        = require './config'


gulp.task 'coffee', ->
  gulp.src './src/coffee/**/*.coffee'
  .pipe $.plumber(errorHandler: onError)
  .pipe $.sourcemaps.init()
  .pipe $.coffee()
  .pipe $.concat 'app.js'
  .pipe $.sourcemaps.write './'
  .pipe gulp.dest config.exportPath + '/js/'
  .pipe browserSync.reload(stream : true)

## Production ##

gulp.task 'production:coffee', ->
  gulp.src './src/coffee/**/*.coffee'
  .pipe $.plumber(errorHandler: onError)
  .pipe $.coffee()
  .pipe $.concat 'app.js'
  .pipe $.uglify
    preserveComments : 'license'
  .pipe gulp.dest config.exportPath + '/js/'
  .pipe browserSync.reload(stream : true)
