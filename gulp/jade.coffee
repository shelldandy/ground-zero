'use strict'
gulp          = require 'gulp'
jade          = require 'gulp-jade'
browserSync   = require 'browser-sync'

gulp.task 'jade', ->
  gulp.src './src/jade/**/!(_)*.jade'
  .pipe jade(
    pretty: true
    )
  .pipe(gulp.dest './dist')
  .pipe browserSync.reload(
    stream: true
    )
