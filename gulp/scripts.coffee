'use strict'
gulp          = require 'gulp'
concat        = require 'gulp-concat'
sourcemaps    = require 'gulp-sourcemaps'
browserSync   = require 'browser-sync'
config        = require './config'

gulp.task 'scripts', ->
  gulp.src config.scriptFiles
  .pipe sourcemaps.init()
  .pipe concat 'app.js'
  .pipe sourcemaps.write './'
  .pipe gulp.dest './dist/js/'
  .pipe browserSync.reload(stream : true)
