# <%= projectName %>

[![license][license-image]][license-url] <% if (includeGitHubActions) { -%>![Continuous Integration](https://github.com/<%= githubUsername %>/<%= projectName %>/workflows/Continuous%20Integration/badge.svg) <% } -%>[![Dependency Status][dependencyci-image]][dependencyci-url]

> <%= projectDescription %>

## Prerequisites

To install this project, you'll need the following things installed on your machine.

1. [Jekyll](http://jekyllrb.com/).
2. [NodeJS](http://nodejs.org) - use the installer.
<% if (includeFirebase) { -%>
3. [Firebase CLI](https://github.com/firebase/firebase-tools).
<% } -%>

## Local Installation

1. Clone this repo, or download it into a directory of your choice.
2. Inside the directory, run `npm install`.
3. Inside the directory, run `bundle install`.

## Usage

**Development mode**

This will give you file watching, browser synchronisation, auto-rebuild, CSS injecting etc.

```shell
$ npm run start
```

**Deploy mode**

You can easily deploy your site build with the command
```shell
$ npm run deploy
```

<% if (includeGitHubActions) { -%>
## Tests

If you want to run the tests on your local machine please install `gem install html-proofer`. And then run the tests using
```shell
$ htmlproofer ./_site
```
<% } -%>

[license-image]: https://img.shields.io/badge/license-ISC-blue.svg
[license-url]: https://github.com/<%= githubUsername %>/<%= projectName %>/blob/master/LICENSE
[dependencyci-image]: https://dependencyci.com/github/<%= githubUsername %>/<%= projectName %>/badge
[dependencyci-url]: https://dependencyci.com/github/<%= githubUsername %>/<%= projectName %>
