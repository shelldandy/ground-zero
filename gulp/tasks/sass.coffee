'use strict'
gulp        = require 'gulp'
browserSync = require 'browser-sync'
config      = require './config'
onError     = require './error'
plugins       = require 'gulp-load-plugins'
$             = plugins()


gulp.task 'sass', ->
  gulp.src './src/sass/**/!(_)*.sass'
  .pipe $.plumber(errorHandler: onError)
  .pipe $.sourcemaps.init()
  .pipe $.sass
    includePaths : config.sassIncludes
    outputStyle : 'nested'
  .pipe $.autoprefixer
    browsers : ['last 2 versions']
  .pipe $.csscomb()
  .pipe $.sourcemaps.write './'
  .pipe gulp.dest './dist/css/'
  .pipe browserSync.reload(stream : true)
