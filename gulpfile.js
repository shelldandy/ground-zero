'use strict'

const gulp              = require('gulp')
const browserSync       = require('browser-sync')
const runSequence       = require('run-sequence').use(gulp)
const requireDir        = require('require-dir')
const config            = require('./gulp/config')

// Let's require all the tasks inside gulp/tasks
requireDir('./gulp/tasks', {
  recurse : true
})

// Browser Sync Task
gulp.task('browsersync', () => {
  return browsersync({
    server : {
      baseDir : config.distFolder,
      serveStaticOptions : {
        extensions : ['html']
      }
    },
    open : false,
    logConnections : true
  })
})

function reload(done) {
  browsersync.reload({stream : true});
  done();
}

// Simple Watch Command for a more serious one try production.js
gulp.task('watch', ['browsersync'], () => {
  return gulp.watch('src/pug/**' , ['pug'])
  gulp.watch('src/sass/**'  , ['sass'])
  gulp.watch('src/scripts/**', ['scripts'])
  gulp.watch('src/bower/**', ['scripts', 'sass'])
  gulp.watch('src/img/**'   , ['imagemin'])
  gulp.watch('src/assets/**', ['assets'])
  gulp.watch('src/svg/**', ['svg', 'pug'])
  gulp.watch('src/fonts/**/*', ['fonts'])
})

// Our default task because yololo
gulp.task('default', () =>{
  return runSequence('clean',
    'scripts',
    'fonts',
    'sass',
    'imagemin',
    'assets',
    'svg:inline',
    'svg:external',
    'pug',
    'watch'
  )
})

// GitLab Task for Builds
gulp.task('gitlab', () =>{
  return runSequence('clean',
    'scripts',
    'fonts',
    'sass',
    'imagemin',
    'assets',
    'svg:inline',
    'svg:external',
    'production:pug'
  )
})
