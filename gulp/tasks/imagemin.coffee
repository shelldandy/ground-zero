'use strict'
gulp        = require 'gulp'
pngquant    = require 'imagemin-pngquant'
browserSync = require 'browser-sync'
onError       = require './error'
plugins       = require 'gulp-load-plugins'
$             = plugins()

gulp.task 'imagemin', ->
  gulp.src './src/img/**/*'
  .pipe $.plumber(errorHandler: onError)
  .pipe $.newer './dist/img'
  .pipe $.imagemin(
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
