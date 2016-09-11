'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-jekyll-starter-kit:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({
        html: 'html',
        css: 'css'
      })
      .withPrompts({
        project_name: 'projectName',
        github_url: 'githubURL',
        github_username: 'githubUserName',
        project_description: 'projectDescription',
        es: true,
        sw: true,
        travis: true
      })
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'index.html'
    ]);
  });
});
