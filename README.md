# Ground Zero
Punto de partida para proyectos de Front-End

Pensado para [GeekyBytes Lite](http://geekybytes.mx)

Con la ayuda moral de [@SusyFlores](https://github.com/SusyFlores) y un 🐶.

![MRW Life](mfw.gif)


## Pre-Instalación
- Primero necesitamos tener terminal preferiblemente [iTerm](https://www.iterm2.com/) porque pues es bonito

- De la misma forma necesitamos tener NodeJS y NPM si no los tienes instala con [Homebrew](http://brew.sh/)
```
brew install node
```
- Una vez que tengas NPM vamos a instalar nuestras dependencias globales con el siguiente comando **Nota esto solo se hace la primera vez que lo instales por siempre**
```
npm run firstTime
```

## Instalación

**Navega primero a la carpeta raíz del proyecto y entonces corre**

```
npm run getReady
```

## Uso

- Listo ahora para operar simplemente puedes correr el siguiente comando
```
npm start
```
- Cuando estes listo para cargar el proyecto vía FTP o lo que sea corre el siguiente comando
```
gulp production
```
- Finalmente si estás ocupando GitHub como yo para guardar todo puedes usar este comando para cargar rápidamente a [Github Pages](https://pages.github.com/)
```
gulp deploy
```

## Features
- Modular: Cada task de gulp está posicionada en su propio módulo, para facilidad de uso y comprensión. Igualmente está escrito en CoffeeScript por estética 😍


- **Odin** un framework hecho con Sass pensado con los principios BEM y SMACSS para super modularidad y belleza. Configura caaasi todo en `src/sass/0-utilities/_config.sass` Es básicamente barebones para que encima construyas lo que sea, te permite importar facilmente tus google fonts, ajustar breakpoints, paleta de colores, incluye mixins poderosos como por ejemplo:

  ```
  .sample
    padding: ms(1) 0 // Acá estamos usando modular-scale checa más abajo que es ;)

    +m(button) // genera esto: .sample__button
      background: palette(gris, xx-light) // checa color-palletes para configurar estos colores :)

      +e(alert) // genera esto: .sample__button--alert
        background: $rojo // color general en _config.sass
  ```

- [Modular-Scale](https://github.com/modularscale/modularscale-sass) - Plugin de Sass basado en [Type-Scale](http://type-scale.com/) nos permite ajustar tamaños de letra, margin, padding, etc etc de manera muy fácil en formatos EM y usando cuestiones de belleza matemática como Cuartos Perfectos (default), o Golden Ratio (como la cara de Britney Bitch) para que exista armonía y belleza en tus proyectos sin tener que andar pensando. 🍺

- CoffeeScript, TypeScript, Vanilla JS? Te tenemos cubierto! Concatena y minifiza código en cualquiera de esos sabores, el que está por default es CoffeeScript así que si lo quieres cambiar checa en `gulp/index.coffee`

## ¿Qué podría mejorar?
De momento solo hay compatibilidad con Jade y Sass pues es lo que uso, pero es algo fácilmente corregible solo crea tus módulos correspondientes dentro de la carpeta `gulp` y añadelos al index y listo!!
