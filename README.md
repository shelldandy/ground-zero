# Ground Zero
Punto de partida para proyectos de Front-End

Con la ayuda moral de [@SusyFlores](https://github.com/SusyFlores) y un 🐶 (Chochini)

![It's 2.0!](meSoHappy.gif)

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
npm run githubDeploy
```

## Features
- Modular: Cada task de gulp está posicionada en su propio módulo, para facilidad de uso y comprensión. Igualmente está escrito en CoffeeScript por estética 😍

- **SVG Power!**: Quieres tener todo el poder de íconos svg? Lo tienes! En la carpeta `svg` puedes meter íconos ya sea en inline o en external y usa adecuadamente. Se les pueden cambiar colores, anchura, anima, se feliz. Hay un ejemplo en `_sample.jade` Checa http://fvsch.com/code/svg-icons/how-to/ para más información

- **Odin** un framework hecho con Stylus / Sass pensado con los principios BEM y SMACSS para super modularidad y belleza. Configura caaasi todo en `src/sass/0-utilities/_config.sass` Es básicamente barebones para que encima construyas lo que sea, te permite importar facilmente tus google fonts, ajustar breakpoints, paleta de colores, incluye mixins y funciones poderosas mwahaha.

- **Usa custom fonts en Base64** Fuck yeah! Tienes unas fonts que te pasaron en formato escritorio porque Diseñador? No importa metelas en tu carpeta `src/fonts` o si un paquete de Bower tiene sus fonts no las copies solo agrega su camino en config.coffee fonts!

- [**Modular-Scale**](https://github.com/modularscale/modularscale-sass) - Plugin de Sass basado en [Type-Scale](http://type-scale.com/) nos permite ajustar tamaños de letra, margin, padding, etc etc de manera muy fácil en formatos EM y usando cuestiones de belleza matemática como Cuartos Perfectos (default), o Golden Ratio (como la cara de Britney Bitch) para que exista armonía y belleza en tus proyectos sin tener que andar pensando. 🍺
