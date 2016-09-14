'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-jekyll-starter-kit:app', function () {
  this.timeout(10000);

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
      'index.html',
      'README.md',
      'css'
    ]);
  });

  it('not created files', function () {
    assert.noFile([
      'scss',
      'sass'
    ]);
  });

  it('fills package.json with correct information', function () {
    assert.JSONFileContent('package.json', {
      name: 'name'
    });
  });

  it('fills the README with project data', function () {
    assert.fileContent('README.md', 'name');
  });
});

describe('scss-scenario', function () {
  this.timeout(10000);

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
      'scss'
    ]);
  });

  it('not created files', function () {
    assert.noFile([
      'css',
      'sass'
    ]);
  });
});

describe('sass-scenario', function () {
  this.timeout(10000);

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
