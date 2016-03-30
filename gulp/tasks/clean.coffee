'use strict'
gulp = require 'gulp'
clean = require 'del'

gulp.task 'clean', ->
  clean ['./dist/**', '!./dist', './.publish']
