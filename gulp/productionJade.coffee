'use strict'
gulp          = require 'gulp'
jade          = require 'gulp-jade'
browserSync   = require 'browser-sync'

gulp.task 'productionJade', ->
  gulp.src './src/jade/**/!(_)*.jade'
  .pipe jade()
  .pipe(gulp.dest './dist')
  .pipe browserSync.reload(
    stream: true
    )
