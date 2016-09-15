'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-html-css-es2015-sw-travis', function () {
  this.timeout(5000);

  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        projectName: 'name',
        githubUrl: 'url',
        githubUsername: 'username',
        projectDescription: 'description',
        html: 'html',
        css: 'stylesheets',
        es: true,
        sw: true,
        travis: true
      })
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      '_includes',
      '_layouts',
      '_posts',
      'css',
      'images',
      '_config.yml',
      '.babelrc',
      '.gitignore',
      'about.md',
      'feed.xml',
      'Gemfile',
      'gulpfile.babel.js',
      'humans.txt',
      'index.html',
      'LICENSE',
      'manifest.json',
      'manifest.webapp',
      'package.json',
      'README.md',
      'robots.txt',
      '.travis.yml'
    ]);
  });

  it('not created files', function () {
    assert.noFile([
      '_includes-pug',
      'scss',
      'sass'
    ]);
  });

  it('fills package.json with correct information', function () {
    assert.JSONFileContent('package.json', {
      name: 'name',
      description: 'description',
      author: 'username',
      repository: {
        url: 'url'
      }
    });
  });

  it('fills the README with project data', function () {
    assert.fileContent('README.md', 'name');
  });

  it('fills the LICENSE with project data', function () {
    assert.fileContent('LICENSE', 'name');
  });
});

describe('generator-pug-scss-travis', function () {
  this.timeout(5000);

  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        projectName: 'name',
        githubUrl: 'url',
        githubUsername: 'username',
        projectDescription: 'description',
        html: 'pug',
        css: 'scss',
        es: true,
        sw: true,
        travis: true
      })
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      '_includes-pug',
      'scss',
      '.travis.yml'
    ]);
  });

  it('not created files', function () {
    assert.noFile([
      'css',
      'sass'
    ]);
  });
});

describe('generator-pug-sass-no_travis', function () {
  this.timeout(5000);

  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        projectName: 'name',
        githubUrl: 'url',
        githubUsername: 'username',
        projectDescription: 'description',
        html: 'pug',
        css: 'sass',
        es: true,
        sw: true,
        travis: false
      })
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      '_includes-pug',
      'sass'
    ]);
  });

  it('not created files', function () {
    assert.noFile([
      'css',
      'scss',
      '.travis.yml'
    ]);
  });
});
