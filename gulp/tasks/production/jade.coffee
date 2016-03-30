'use strict'
gulp          = require 'gulp'
browserSync   = require 'browser-sync'
onError       = require '../error'
plugins       = require 'gulp-load-plugins'
$             = plugins()

gulp.task 'production:jade', ->
  gulp.src './src/jade/**/!(_)*.jade'
  .pipe $.accord 'jade',
    basedir : './src/jade'
  .pipe(gulp.dest './dist')
  .pipe browserSync.reload
    stream: true
