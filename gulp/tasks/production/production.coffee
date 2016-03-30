'use strict'
gulp              = require 'gulp'
browserSync       = require 'browser-sync'
runSequence       = require('run-sequence').use(gulp)

# Serious Watch Command
gulp.task 'production:watch', ['browsersync'], ->
  gulp.watch 'src/jade/**'  , ['production:jade']
  gulp.watch 'src/sass/**'  , ['production:sass']
  gulp.watch 'src/coffee/**', ['production:coffee']
  gulp.watch 'src/styl/**/*' , ['production:stylus']
  gulp.watch 'src/bower/**', ['production:scripts', 'production:sass']
  gulp.watch 'src/img/**'   , ['imagemin']
  gulp.watch 'src/assets/**', ['assets']
  gulp.watch 'src/svg/**', ['svg', 'production:jade']


# Default Production task Because YOLOP
gulp.task 'production', ->
  runSequence 'clean',
    'production:scripts',
    'production:coffee'
    'production:sass',
    'production:stylus',
    'imagemin',
    'assets',
    'svg',
    'production:jade',
    'production:watch'


# Default Production task Because YOLOP
gulp.task 'production:noWatch', ->
  runSequence 'clean',
    'production:scripts',
    'production:coffee'
    'production:sass',
    'production:stylus',
    'imagemin',
    'assets',
    'svg',
    'production:jade'
