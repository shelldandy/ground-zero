'use strict'
gulp          = require 'gulp'
browserSync   = require 'browser-sync'
onError       = require './error'
plugins       = require 'gulp-load-plugins'
$             = plugins()
config        = require './config'

devLocals =
  production : false
  base : '/'

prodLocals =
  production : true
  base : config.productionBase

gulp.task 'pug', ->
  gulp.src './src/pug/**/!(_)*.pug'
  .pipe $.plumber(errorHandler: onError)
  .pipe $.pug
    pretty : true
    basedir : './src/pug'
    locals : devLocals
  .pipe gulp.dest config.exportPath + '/'
  .pipe browserSync.reload
    stream: true

## PRODUCTION  ##
gulp.task 'production:pug', ->
  gulp.src './src/pug/**/!(_)*.pug'
  .pipe $.plumber(errorHandler: onError)
  .pipe $.pug
    basedir : './src/pug'
    locals : prodLocals
  .pipe gulp.dest config.exportPath + '/'
  .pipe browserSync.reload
    stream: true
