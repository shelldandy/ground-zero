'use strict'
gulp          = require 'gulp'
coffee        = require 'gulp-coffee'
gutil         = require 'gulp-util'
concat        = require 'gulp-concat'
sourcemaps    = require 'gulp-sourcemaps'
browserSync   = require 'browser-sync'
streamqueue   = require 'streamqueue'
config        = require './config'


gulp.task 'mixedJS', ->
  streamqueue({ objectMode: true},
    gulp.src(config.scriptFiles)
    gulp.src(config.coffeeFiles).pipe coffee().on 'error', gutil.log
    )
  .pipe sourcemaps.init()
  .pipe concat 'app.js'
  .pipe sourcemaps.write './'
  .pipe gulp.dest './dist/js/'
  .pipe browserSync.reload(stream : true)
