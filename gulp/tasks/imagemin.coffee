'use strict'
gulp          = require 'gulp'
browserSync   = require 'browser-sync'
onError       = require './error'
plugins       = require 'gulp-load-plugins'
$             = plugins()
config        = require './config'

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
  )
  .pipe gulp.dest config.exportPath + '/img/'
  .pipe browserSync.reload(stream : true)
