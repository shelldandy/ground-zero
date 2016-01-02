'use strict'
gulp = require 'gulp'
browserSync = require 'browser-sync'

gulp.task 'browsersync', ['clean', 'jade', 'sass', 'coffee', 'imagemin'], ->
  browserSync.init(
    server: (
      baseDir: './dist'
      )
    port: 1705
    ui : (
      port: 1706
      )
    )

gulp.task 'watch', ->
  gulp.watch 'src/jade/**', ['jade']
  gulp.watch 'src/sass/**', ['sass']
  gulp.watch 'src/coffee/**', ['coffee']
  gulp.watch 'src/img/**', ['imagemin']
