'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-jekyll-starter-kit:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        projectName: 'name',
        githubUrl: 'url',
        githubUsername: 'username',
        projectDescription: 'description',
        html: 'html',
        css: 'css',
        es: true,
        sw: true,
        travis: true
      })
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'index.html',
      'README.md'
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
