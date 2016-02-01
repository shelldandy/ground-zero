module.exports =
  sassIncludes : [
    './src/bower_components/modular-scale/stylesheets'
    ]
  coffeeFiles : [
    './src/coffee/app.coffee'
    './src/coffee/beta.coffee'
    ]
  tsFiles   : './src/ts/**/!(_)*.ts'
  tdFiles   : './src/ts/**/*.td'
  tsOutput  : './dist/js'
  scriptFiles : [
      './src/bower_components/jquery/dist/jquery.js'
      './src/bower_components/bootstrap-sass/assets/javascripts/bootstrap.js'
    ]
  uncssHtml : [
    './dist/index.html'
  ]
  uncssIgnore : [
    ''
  ]
