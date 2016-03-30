'use strict'
gulp          = require 'gulp'
browserSync   = require 'browser-sync'
onError       = require '../error'
plugins       = require 'gulp-load-plugins'
$             = plugins()

# Stylus Plugins
axis          = require 'axis'
jeet          = require 'jeet'

gulp.task 'production:stylus', ->
  gulp.src './src/styl/odin.styl'
  .pipe $.plumber(errorHandler: onError)
  .pipe $.accord 'stylus',
    use : [
      axis()
      jeet()
    ]
    include : ['src/styl']
  .pipe $.autoprefixer
    browsers : ['last 2 versions']
  .pipe $.csscomb()
  .pipe $.cssnano()
  .pipe gulp.dest './dist/css'
  .pipe browserSync.reload
    stream : true
