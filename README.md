# Ground Zero
![Bart Simpson](https://media.giphy.com/media/26tPplGWjN0xLybiU/giphy.gif)

Starting point for Front-End Projects

## Requirements
- NodeJS (Recommended 4.4.6)
- npm (Recommended 3.10.4)

## Install

```
npm start
```

## Usage

```
gulp
```
- This will run everything on development mode (source maps, expanded, etc) To run live on production try:

```
gulp production
```
- Finally you can also auto-deploy to [Github Pages](https://pages.github.com/) with the command
```
gulp deploy
```
**Note:** For that to work your github branch must be named `origin`

## Features
- **Modular**: Each gulp task is on its own file so can assemble or play with them at your will. I'm also using CoffeeScript but mainly for looks.

- **SVG Power!**: Work with SVG like a bawse! Just drop'em either on the `src/svg/inline` or `src/svg/external` to generate svg icons like font icons but much better ♥️

- **BEM/SMACSS** Configure almost everything on `src/sass/0-utilities/_config.scss`

- **Base64 Fonts**: Have you ever had the asshole designer that only gives you .ttf fonts for you to deal with? Maybe you are trying some fonts before going for a full web license. Just drop'em on the `src/fonts` directory and we'll have you covered.

- [**Modular-Scale**](https://github.com/modularscale/modularscale-sass) - Sass Plugin based on [Type-Scale](http://type-scale.com/) using math ratios to have beauty integrated on our project.
