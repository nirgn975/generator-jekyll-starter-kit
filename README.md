<img src="https://raw.githubusercontent.com/nirgn975/generator-jekyll-starter-kit/master/images/jekyll-starter-kit.png" />


[![license][license-image]][license-url] [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][dependencyci-image]][dependencyci-url] [![Coverage percentage][coveralls-image]][coveralls-url] [![Gitter][gitter-image]][gitter-url]

> Jekyll + Google web-starter-kit = best of both worlds

<div style="width: 100%; text-align: center;">
  <img style="width: 80%;" src="https://raw.githubusercontent.com/nirgn975/generator-jekyll-starter-kit/master/images/hyper-terminal.png" />
</div>

## Installation

First, install [Yeoman](http://yeoman.io) and jekyll-starter-kit using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-jekyll-starter-kit
```

Then generate your new project:

```bash
yo jekyll-starter-kit
```

## Features

  * Automagically compile [Pug](https://github.com/pugjs/pug)
  * Automagically compile Sass / SCSS
  * Minify HTML
  * Minify and Autoprefixing CSS
  * Awesome image optimization before deploy
  * Enable ES2015 features using Babel
  * Concatenate and minify JavaScript
  * Built-in preview server with BrowserSync
  * Automagically create a service worker file
  * Deploy the project to GitHub pages or Firebase with only one command
  * Automagically test your project output on Travis-CI
  * Test your project against [lighthouse](https://github.com/GoogleChrome/lighthouse) and fail Travis-CI with score below 80

## Want to help?

Great! Here is how you can install the local generator to test changes.

  1. Git clone your fork locally.
  2. `npm install` inside the new directory.
  3. `npm link` - This makes your local system sync with the changes you make
  4. `mkdir app`
  5. Inside the new directory, initiate `yo generator-jekyll-starter-kit`

## Contributors

  * [Nir Galon](http://nirgn.com)
  * [Yotam Emergy](http://ydesign.webflow.io/)

[![npm][downloads-image]][downloads-url] [![Donate][donate-image]][donate-url]

[license-image]: https://img.shields.io/badge/license-ISC-blue.svg
[license-url]: https://github.com/nirgn975/generator-jekyll-starter-kit/blob/master/LICENSE
[npm-image]: https://badge.fury.io/js/generator-jekyll-starter-kit.svg
[npm-url]: https://npmjs.org/package/generator-jekyll-starter-kit
[travis-image]: https://travis-ci.org/nirgn975/generator-jekyll-starter-kit.svg?branch=master
[travis-url]: https://travis-ci.org/nirgn975/generator-jekyll-starter-kit
[dependencyci-image]: https://dependencyci.com/github/nirgn975/generator-jekyll-starter-kit/badge
[dependencyci-url]: https://dependencyci.com/github/nirgn975/generator-jekyll-starter-kit
[coveralls-image]: https://coveralls.io/repos/nirgn975/generator-jekyll-starter-kit/badge.svg
[coveralls-url]: https://coveralls.io/r/nirgn975/generator-jekyll-starter-kit
[gitter-image]: https://img.shields.io/badge/Gitter-Join_the_chat_%E2%86%92-00d06f.svg
[gitter-url]: https://gitter.im/jekyll_starter_kit/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge
[downloads-image]: https://img.shields.io/npm/dt/generator-jekyll-starter-kit.svg
[downloads-url]: https://www.npmjs.com/package/generator-jekyll-starter-kit
[donate-image]: https://img.shields.io/badge/Donate-PayPal-lightgrey.svg
[donate-url]: https://www.paypal.me/nirgn/2
