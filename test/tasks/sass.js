'use strict'

const utils = require('../utils')
const chai = require('chai')
const expect = chai.expect

describe('sass gulp task tests suite', function () {
  afterEach(function (done) {
    utils.runTask('clean', done)
  })

  it('should output valid css')
  it('should output a single css file')
})

describe('sass task with --prod flag on tests suite', function() {
  afterEach(function (done) {
    utils.runTask('clean', done)
  })
  it('should run after gulp pug to work')
  it('should output minified css')
  it('should output a much smaller css than the normal one')
  it('should output 3 files: normal, minified and gzipped')

})
