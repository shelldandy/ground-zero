'use strict'
const gulp = require('gulp')
const clean = require('del')
const config = require('../config')

gulp.task('clean', done => {
  return clean([
    `${config.distFolder}/**`,
    `!${config.distFolder}`,
    './.publish'
  ])
})

gulp.task('clean:git', done => {
  return clean(['./.git'])
})
