'use strict'

const gulp = require('gulp')
const config = require('../config')
const $ = require('gulp-load-plugins')()
const when = require('gulp-if')

const production = config.production
const destination = config.directories.dist.scripts

const browserify = require('browserify')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const babel = require('babelify')

gulp.task('scripts', () => {
  const bundler = browserify({
    entries: './src/assets/js/index.js',
    debug: true,
    transform: [
      babel.configure({
        'presets': [
          [
            'env',
            {
              'targets': {
                'browsers': ['last 2 versions', 'iOS 8'],
                'uglify': 2
              }
            }
          ]
        ],
        'plugins': [
          [
            'transform-object-rest-spread',
            {
              'useBuiltIns': true
            }
          ]
        ]
      })
    ]
  })

  return bundler.bundle()
    .on('error', config.onError)
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(when(!production, $.sourcemaps.init({ loadMaps: true })))
    .pipe(when(!production, $.sourcemaps.write('./')))
    .pipe(gulp.dest(destination))
    // All production stuff here
    // Rename file to .min and uglify that stuff
    .pipe(when(production, $.rename({suffix: '.min'})))
    .pipe(when(production, $.uglify({
      preserveComments: 'license'
    }))).on('error', config.onError)
    .pipe(when(production, gulp.dest(destination)))
})
