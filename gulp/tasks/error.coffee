'use strict'
gulp 				= require('gulp')
plugins 		= require 'gulp-load-plugins'
$ 					= plugins()

onError = (error) ->
	$.notify.onError('ERROR: <%- error.plugin %>') error
	$.util.beep()
	$.util.log '======= ERROR. ========\n'
	$.util.log error

module.exports = onError
