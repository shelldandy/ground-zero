# Ground Zero Version 4
![Bart Simpson](https://i.giphy.com/l4Ho0UxScKzfY0HIc.gif)

Starting point for Front-End Projects using Gulp 4.0alpha 2

## Requirements
- NodeJS (Recommended 4.5.0)
- npm (Recommended 3.10.6)

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
gulp --prod
```
- Finally you can also auto-deploy to [Github Pages](https://pages.github.com/) with the command
```
gulp deploy
```
**Note:** For that to work your github branch must be named `origin`

## Features
- **Modular**: Each gulp task is on its own file so can assemble or play with them at your will. I'm also using CoffeeScript but mainly for looks.

- **SVG Power!**: Work with SVG like a bawse! Just drop'em either on the `src/svg/inline` or `src/svg/external` to generate svg icons like font icons but much better ♥️

- **Base64 Fonts**: Have you ever had the asshole designer that only gives you .ttf fonts for you to deal with? Maybe you are trying some fonts before going for a full web license. Just drop'em on the `src/fonts` directory and we'll have you covered.

- [**Modular-Scale**](https://github.com/modularscale/modularscale-sass) - Sass Plugin based on [Type-Scale](http://type-scale.com/) using math ratios to have beauty integrated on our project.

## How to contribute

If you wish to contribute to ground-zero, just fork it and submit a PR.

### Linting

We use ESLint version 3.x as our default linter, make sure you've got a proper linter plugin or add-on for your editor.
Check the rules set picked in our `.eslintrc` file.
