'use strict'
gulp        = require 'gulp'
ts          = require 'gulp-typescript'
sourcemaps  = require 'gulp-sourcemaps'
browserSync = require 'browser-sync'
config      = require './config'



gulp.task 'typescript', ->
  tsProject = ts.createProject './src/ts/tsconfig.json'
  sourceTsFiles = [
    config.tsFiles
    config.tdFiles
  ]
  tsResult = tsProject.src sourceTsFiles
  .pipe sourcemaps.init()
  .pipe ts(tsProject)

  tsResult.js
  .pipe sourcemaps.write './'
  .pipe gulp.dest config.tsOutput
  .pipe browserSync.reload(stream : true)
