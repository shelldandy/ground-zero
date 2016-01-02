'use strict'

gulp = require 'gulp'

gulp.task 'production', ['clean', 'productionJade', 'productionSass', 'productionCoffee', 'imagemin']
