'use strict'
gulp          = require 'gulp'
coffee        = require 'gulp-coffee'
gutil         = require 'gulp-util'
concat        = require 'gulp-concat'
sourcemaps    = require 'gulp-sourcemaps'
browserSync   = require 'browser-sync'
config        = require './config'

gulp.task 'coffee', ->
  gulp.src config.coffeeFiles
  .pipe sourcemaps.init()
  .pipe coffee().on 'error', gutil.log
  .pipe concat 'app.js'
  .pipe sourcemaps.write './'
  .pipe gulp.dest './dist/js/'
  .pipe browserSync.reload(stream : true)
