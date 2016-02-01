'use strict'
gulp          = require 'gulp'
concat        = require 'gulp-concat'
uglify        = require 'gulp-uglify'
browserSync   = require 'browser-sync'
config        = require './config'

gulp.task 'productionScripts', ->
  gulp.src config.scriptFiles
  .pipe concat 'app.js'
  .pipe uglify(
    mangle: false
  )
  .pipe gulp.dest './dist/js/'
  .pipe browserSync.reload(stream : true)
