'use strict'
gulp        = require 'gulp'
sass        = require 'gulp-sass'
prefix      = require 'gulp-autoprefixer'
sourcemaps  = require 'gulp-sourcemaps'
browserSync = require 'browser-sync'
csscomb     = require 'gulp-csscomb'
config      = require './config'


gulp.task 'sass', ->
  gulp.src './src/sass/**/!(_)*.sass'
  .pipe sourcemaps.init()
  .pipe sass(
    includePaths : config.sassIncludes
    outputStyle : 'nested'
    )
  .pipe prefix(
    browsers : ['last 2 versions']
    )
  .pipe csscomb()
  .pipe sourcemaps.write './'
  .pipe gulp.dest './dist/css/'
  .pipe browserSync.reload(stream : true)
