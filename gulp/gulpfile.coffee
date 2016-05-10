'use strict'
gulp              = require 'gulp'
browserSync       = require 'browser-sync'
runSequence       = require('run-sequence').use(gulp)
requireDir        = require 'require-dir'

# Require all tasks in gulp/tasks, including subfolders
requireDir './tasks',
  recurse: true

# Default BrowserSync task
gulp.task 'browsersync', ->
  browserSync
    port: 1705
    ui :
      port: 1706
    server:
      baseDir : './dist'
    open: false
    tunnel : false
    online : true
    logConnections : true

# Simple Watch Command for a more serious one try production.coffee
gulp.task 'watch', ['browsersync'], ->
  gulp.watch 'src/jade/**'  , ['jade']
  gulp.watch 'src/sass/**'  , ['sass']
  gulp.watch 'src/coffee/**', ['coffee']
  gulp.watch 'src/bower/**', ['scripts', 'sass']
  gulp.watch 'src/img/**'   , ['imagemin']
  gulp.watch 'src/assets/**', ['assets']
  gulp.watch 'src/svg/**', ['svg', 'jade']
  gulp.watch 'src/fonts/**/*', ['fonts']

# Default Task Because YOLO
gulp.task 'default', ->
  runSequence 'clean',
    'scripts',
    'coffee',
    'fonts'
    'sass',
    'imagemin',
    'assets',
    'svg:inline',
    'svg:external',
    'jade',
    'watch'

# GitLab Task for Builds
gulp.task 'gitlab', ->
  runSequence 'clean',
    'scripts',
    'coffee',
    'fonts',
    'sass',
    'imagemin',
    'assets',
    'svg:inline',
    'svg:external',
    'jade'
