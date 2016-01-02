'use strict'
gulp        = require 'gulp'
imagemin    = require 'gulp-imagemin'
pngquant    = require 'imagemin-pngquant'
newer       = require 'gulp-newer'
browserSync = require 'browser-sync'

gulp.task 'imagemin', ->
  gulp.src './src/img/**/*'
  .pipe newer './dist/img'
  .pipe imagemin(
    progressive : true
    multipass : true
    svgoPlugins : [{
      removeViewBox : false
      removeDimensions : true
      }]
    use : [pngquant()]
  )
  .pipe gulp.dest './dist/img'
  .pipe browserSync.reload(stream : true)
