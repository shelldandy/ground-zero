'use strict'
gulp          = require 'gulp'
browserSync   = require 'browser-sync'
config        = require './config'
onError       = require './error'
plugins       = require 'gulp-load-plugins'
$             = plugins()


gulp.task 'sass', ->
  gulp.src './src/sass/**/!(_)*.sass'
  .pipe $.plumber(errorHandler: onError)
  .pipe $.sourcemaps.init()
  .pipe $.sass
    includePaths : config.sassIncludes
  .pipe $.autoprefixer
    browsers : ['last 2 versions']
  .pipe $.groupCssMediaQueries()
  .pipe $.csscomb()
  .pipe $.sourcemaps.write './'
  .pipe gulp.dest config.exportPath + '/css/'
  .pipe browserSync.reload
    stream : true

## Production
gulp.task 'production:sass', ->
  gulp.src './src/sass/**/!(_)*.sass'
  .pipe $.plumber(errorHandler: onError)
  .pipe $.sass
    includePaths : config.sassIncludes
  .pipe $.autoprefixer
    browsers : ['last 2 versions']
  .pipe $.groupCssMediaQueries()
  .pipe $.uncss
    html : config.uncssHtml
    ignore : config.uncssIgnore
  .pipe $.csscomb()
  .pipe $.cssnano()
  .pipe gulp.dest config.exportPath + '/css/'
  .pipe browserSync.reload
    stream : true
