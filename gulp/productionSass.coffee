'use strict'
gulp        = require 'gulp'
sass        = require 'gulp-sass'
prefix      = require 'gulp-autoprefixer'
browserSync = require 'browser-sync'
config      = require './config'


gulp.task 'productionSass', ->
  gulp.src './src/sass/**/!(_)*.sass'
  .pipe sass(
    includePaths : config.sassIncludes
    outputStyle : 'compressed'
    )
  .pipe prefix(
    browsers : ['last 2 versions']
    )
  .pipe gulp.dest './dist/css/'
  .pipe browserSync.reload(stream : true)
