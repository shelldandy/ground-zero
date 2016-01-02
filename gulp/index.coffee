###!
# Manila un stream de Gulp por: @mpalau
# Inspirado en CodeKit pero queriendo hacer más!
# Version 1.5
# Copyright 2015
#
# http://miguel.click/ 😜
###

# Testo Loco
require './test'

# Módulos para el desarrollo
# Si requieres usar typescript descomenta esto y agrega lo correspondiente en watch y browsersync

# require './typescript'

require './jade'
require './sass'
require './coffee'
require './imagemin'
require './assets'
require './clean'

require './watch'
require './browsersync'

require './default'

# Módulos para la producción
# Misma historia si requieres typescript pero versión production ;)

# require './productionTypescript'

require './productionJade'
require './productionSass'
require './productionCoffee'

require './production'

require './productionSync'
require './productionWatch'
require './productionLive'

# Módulo para subir a GH-Pages
require './deploy'

# Módulo para borrar archivo .git
require './cleanGit'
