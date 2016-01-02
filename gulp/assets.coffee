'use strict'
gulp = require 'gulp'
browserSync = require 'browser-sync'


gulp.task 'assets', ->
  gulp.src './src/assets/**/*'
  .pipe gulp.dest './dist/assets/'
  .pipe browserSync.reload(stream : true)
