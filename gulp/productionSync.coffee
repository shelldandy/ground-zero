'use strict'
gulp          = require 'gulp'
browserSync   = require 'browser-sync'

gulp.task 'productionSync', ['productionJade', 'productionSass', 'productionCoffee', 'imagemin', 'assets'], ->
  browserSync.init(
    server: (
      baseDir: './dist'
      )
    port: 1705
    ui : (
      port: 1706
      )
    )
