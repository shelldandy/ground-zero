'use strict'
gulp              = require 'gulp'
browserSync       = require 'browser-sync'
runSequence       = require('run-sequence').use(gulp)

# Serious Watch Command
gulp.task 'production:watch', ['browsersync'], ->
  gulp.watch 'src/pug/**'  , ['production:pug']
  gulp.watch 'src/sass/**'  , ['production:sass']
  gulp.watch 'src/coffee/**', ['production:coffee']
  gulp.watch 'src/bower/**', ['production:scripts', 'production:sass']
  gulp.watch 'src/img/**'   , ['imagemin']
  gulp.watch 'src/assets/**', ['assets']
  gulp.watch 'src/svg/**', ['svg', 'production:pug']
  gulp.watch 'src/fonts/**/*', ['fonts']



# Default Production task Because YOLOP
gulp.task 'production', ->
  runSequence 'clean',
    'production:scripts',
    'production:coffee',
    'fonts',
    'production:sass',
    'imagemin',
    'assets',
    'svg:inline',
    'svg:external',
    'production:pug',
    'production:watch'
