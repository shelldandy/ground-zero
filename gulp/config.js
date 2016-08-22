'use strict';

module.exports = {
  // Just for my own sanity since some Hindi friend can't navigate properly
  productionBase : '/0000/2488',
  productionExtension : '.html',
  // Our main dist folder
  distFolder : './dist',
  // Here you add the paths to the scss files you get with Bower to import and work with.
  sassIncludes : [
    './src/bower/modular-scale/stylesheets',
    './src/bower/manila-mixins/src',
    './src/bower/bem-constructor/dist'
  ],
  // Stuff for UnCss
  uncssHtml : [
    './dist/index.html'
  ],
  uncssIgnore : [
    ''
  ],
  // Here you add the paths to the full-length js files from your Bower imports
  scriptFiles : [
    './src/bower/jquery/dist/jquery.min.js',
    './src/bower/svg4everybody/dist/svg4everybody.min.js',
    './src/scripts/plugins/*.js',
    './src/scripts/*.js'
  ],
  // Path to un-worked font files
  fonts : [
    './src/fonts/*.otf',
    './src/fonts/*.ttf'
  ],
  // Asset File Paths
  assets : [
    './src/assets/**/*'
  ],
  errorHandler : function (error) {
    console.log(error.toString());
    this.emit('end');
  }
}
