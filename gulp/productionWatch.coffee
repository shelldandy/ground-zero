'use strict'
gulp = require 'gulp'

gulp.task 'productionWatch', ->
  gulp.watch 'src/jade/**', ['productionJade']
  gulp.watch 'src/sass/**', ['productionSass']
  gulp.watch 'src/coffee/**', ['productionCoffee']
  gulp.watch 'src/img/**', ['imagemin']
  gulp.watch 'src/assets/**', ['assets']
