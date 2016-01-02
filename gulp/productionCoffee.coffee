'use strict'
gulp          = require 'gulp'
coffee        = require 'gulp-coffee'
gutil         = require 'gulp-util'
concat        = require 'gulp-concat'
uglify        = require 'gulp-uglify'
browserSync   = require 'browser-sync'
config        = require './config'

gulp.task 'productionCoffee', ->
  gulp.src config.coffeeFiles
  .pipe coffee().on 'error', gutil.log
  .pipe concat 'app.js'
  .pipe uglify(
    preserveComments : 'license'
    )
  .pipe gulp.dest './dist/js/'
  .pipe browserSync.reload(stream : true)
