'use strict'
gulp        = require 'gulp'
sass        = require 'gulp-sass'
prefix      = require 'gulp-autoprefixer'
browserSync = require 'browser-sync'
uncss       = require 'gulp-uncss'
csscomb     = require 'gulp-csscomb'
nano        = require 'gulp-cssnano'
config      = require './config'


gulp.task 'productionSass', ->
  gulp.src './src/sass/**/!(_)*.sass'
  .pipe sass(
    includePaths : config.sassIncludes
    )
  .pipe prefix(
    browsers : ['last 2 versions']
    )
  .pipe uncss(
    html : config.uncssHtml
    ignore: config.uncssIgnore
  )
  .pipe csscomb()
  .pipe nano()
  .pipe gulp.dest './dist/css/'
  .pipe browserSync.reload(stream : true)
