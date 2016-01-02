'use strict'

gulp = require 'gulp'
clean = require 'del'

gulp.task 'cleanGit', ->
  clean ['./.git']
