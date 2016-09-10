'use strict';
const gulp        = require('gulp');
const clean       = require('del');
const config      = require('../config');

gulp.task( 'clean', () => {
  return clean([
    `${config.distFolder}/**`,
    `!${config.distFolder}`,
    './.publish'
  ]);
});

gulp.task( 'clean:git', () => {
  return clean(['./.git']);
});
