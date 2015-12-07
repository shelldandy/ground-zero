# Ground Zero
Punto de partida para proyectos de Front-End

Pensado para [GeekyBytes Lite](http://geekybytes.mx)

Con la ayuda moral de Bella Messi y un 🐶.

![MRW Life](mfw.gif)

😘😘😘😘😘😘

## Setup
- Primero necesitamos tener terminal preferiblemente [iTerm](https://www.iterm2.com/) porque pues es bonito
- De la misma forma necesitamos tener NodeJS y NPM si no los tienes instala con [Homebrew](http://brew.sh/)
```
brew install node
```
- Una vez que tengas NPM vamos a instalar nuestras dependencias globales con el siguiente comando **Nota esto solo se hace la primera vez que lo instales por siempre**
```
npm install -g gulp browser-sync bower
```
- Ahora instala todas las dependencias locales que necesitamos para operar para eso **Navega primero a la carpeta raíz del proyecto y entonces corre**
```
npm install | cd src | bower install
```
- Listo ahora para operar simplemente puedes correr el siguiente comando
```
gulp
```
- Cuando estes listo para cargar el proyecto vía FTP o lo que sea corre el siguiente comando
```
gulp production
```
- Finalmente si estás ocupando GitHub como yo para guardar todo puedes usar este comando para cargar rápidamente a [Github Pages](https://pages.github.com/)
```
gulp deploy
```
