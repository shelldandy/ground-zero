# Ground Zero
Punto de partida para proyectos de Front-End

Con la ayuda moral de [@SusyFlores](https://github.com/SusyFlores) y un 🐶.

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
gulp deploy
```

## Features
- Modular: Cada task de gulp está posicionada en su propio módulo, para facilidad de uso y comprensión. Igualmente está escrito en CoffeeScript por estética 😍

- **SVG Power!**: Quieres tener todo el poder de íconos svg? Lo tienes! En la carpeta `svg` puedes meter íconos ya sea en inline o en external y usa adecuadamente. Se les pueden cambiar colores, anchura, anima, se feliz. Hay un ejemplo en `_sample.jade`

- **Odin** un framework hecho con Stylus / Sass pensado con los principios BEM y SMACSS para super modularidad y belleza. Configura caaasi todo en `src/sass/0-utilities/_config.sass` Es básicamente barebones para que encima construyas lo que sea, te permite importar facilmente tus google fonts, ajustar breakpoints, paleta de colores, incluye mixins y funciones poderosas mwahaha.

- **Axis** - a utility belt for stylus. Resets como si nada, gradientes, layouts, etc muchas cosas muy muy cool checa más acá: http://axis.netlify.com/

- **Jeet** a grid system for humans. porque el mundo no necesita otro sitio con bootstrap. Haz magia estilo Flexbox pero con soporte hasta IE9 + wuuu http://jeet.gs/


## ¿Qué podría mejorar?
De momento solo hay compatibilidad con Jade y Sass pues es lo que uso, pero es algo fácilmente corregible solo crea tus módulos correspondientes dentro de la carpeta `gulp` y añadelos al index y listo!!
