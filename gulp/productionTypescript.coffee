'use strict'
gulp        = require 'gulp'
ts          = require 'gulp-typescript'
sourcemaps  = require 'gulp-sourcemaps'
uglify      = require 'gulp-uglify'
browserSync = require 'browser-sync'
config      = require './config'



gulp.task 'productionTypescript', ->
  tsProject = ts.createProject './src/ts/tsconfig.json'
  sourceTsFiles = [
    config.tsFiles
    config.tdFiles
  ]
  tsResult = tsProject.src sourceTsFiles
  .pipe ts(tsProject)

  tsResult.js
  .pipe uglify(
    preserveComments : 'license'
    )
  .pipe gulp.dest config.tsOutput
  .pipe browserSync.reload(stream : true)
