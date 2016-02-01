'use strict'
gulp          = require 'gulp'
coffee        = require 'gulp-coffee'
gutil         = require 'gulp-util'
concat        = require 'gulp-concat'
uglify        = require 'gulp-uglify'
browserSync   = require 'browser-sync'
streamqueue   = require 'streamqueue'
config        = require './config'

gulp.task 'productionMixedJS', ->
  streamqueue({ objectMode: true},
    gulp.src(config.scriptFiles)
    gulp.src(config.coffeeFiles).pipe coffee().on 'error', gutil.log
    )
  .pipe concat 'app.js'
  .pipe uglify(
    preserveComments : 'license'
    )
  .pipe gulp.dest './dist/js/'
  .pipe browserSync.reload(stream : true)
