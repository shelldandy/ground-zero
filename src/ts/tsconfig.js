module.exports = function() {
  var config = {
    tsFiles   : './src/ts/**/!(_)*.ts',
    tdFiles   : './src/ts/**/*.td',
    tsOutput  : './dist/js'
  };
  return config;
}
