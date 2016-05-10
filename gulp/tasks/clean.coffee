'use strict'
gulp        = require 'gulp'
clean       = require 'del'
config      = require './config'

gulp.task 'clean', ->
  clean [
    config.exportPath + '/**'
    '!' + config.exportPath
    './.publish'
  ]

gulp.task 'clean:git', ->
  clean ['./.git']
