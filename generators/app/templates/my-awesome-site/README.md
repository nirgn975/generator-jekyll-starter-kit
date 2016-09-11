<%= project_name %>
===

[![license](https://img.shields.io/badge/license-ISC-blue.svg)](https://github.com/<%= github_username %>/<%= project_name %>/blob/master/LICENSE) [![Build Status](https://travis-ci.org/<%= github_username %>/<%= project_name %>.svg?branch=master)](https://travis-ci.org/<%= github_username %>/<%= project_name %>)

Your site description

## Prerequisites

To install this project, you'll need the following things installed on your machine.

1. [Jekyll](http://jekyllrb.com/) - `$ gem install jekyll`
2. [NodeJS](http://nodejs.org) - use the installer.

## Local Installation

1. Clone this repo, or download it into a directory of your choice.
2. Inside the directory, run `npm install`.

## Usage

**Development mode**

This will give you file watching, browser synchronisation, auto-rebuild, CSS injecting etc.

```shell
$ npm run gulp
```

**Deploy mode**

You can easily deploy your site build to gh-pages branch with the command
```shell
$ npm run gulp deploy
```

<% if (includeTravis) { -%>
## Tests

If you want to run the tests on your local machine please install `gem install html-proofer`. And then run the tests using
```shell
$ htmlproofer ./_site
```
<% } -%>
