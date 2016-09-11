'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the kickass ' + chalk.red('jekyll-starter-kit') + ' generator!'
    ));

    var prompts = [{
      // Prompts the user for the project name.
      type: 'input',
      name: 'project_name',
      message: 'What will be your project name?',
      required: 'false'
    }, {
      // Prompts the user for the URL of the project's GitHub repo.
      type: 'input',
      name: 'github_url',
      message: 'What is the GitHub repository URL?',
      required: 'false'
    }, {
      // Prompts the user for his GitHub username.
      type: 'input',
      name: 'github_username',
      message: 'What is your GitHub username?',
      required: 'false'
    }, {
      // Prompts the user for his GitHub username.
      type: 'input',
      name: 'project_description',
      message: 'What is your project description?',
      required: 'false'
    }, {
      // Prompts the user to pick a templating engine.
      type: 'list',
      name: 'html',
      message: 'What Template Engine do you want to use?',
      choices: [{
        name: ' HTML',
        value: 'html',
        checked: true
        }, {
        name: ' Pug (Jade) [just for the _includes directory]',
        value: 'pug',
        checked: false
        }]
    }, {
      // Prompts the user to choose stylesheets.
      type: 'list',
      name: 'css',
      message: 'What Stylesheets do you want to use?',
      choices: [{
        name: ' CSS',
        value: 'css',
        checked: true
        }, {
        name: ' SASS',
        value: 'sass',
        checked: false
        }, {
        name: ' SCSS',
        value: 'scss',
        checked: false
        }]
    }, {
      // Prompts the user to decide if he want ES2015 support.
      type: 'confirm',
      name: 'es',
      message: 'Would you like to write ES2015? (ES2015 will be support using Babel and will automatically transpiled to ES5 for wide browser support).',
      default: true
    }, {
      // Prompts the user to decide if he want offline support.
      type: 'confirm',
      name: 'sw',
      message: 'Would you like to enable Service Worker for offline use?',
      default: true
    }, {
      // Prompts the user to decide if he want to validate his build.
      type: 'confirm',
      name: 'travis',
      message: 'Would you like to enable HTMLProofer to validate your Jekyll output on Travis-CI?',
      default: true
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.project_name = props.project_name;
      this.github_username = props.github_username;
      this.github_url = props.github_url;
      this.project_description = props.project_description;
      var html = props.html;

      function hasFeature(features, feat) {
        return features && features.indexOf(feat) !== -1;
      };

      // manually deal with the response, get back and store the results.
      // we change a bit this way of doing to automatically do this in the self.prompt() method.
      this.includePug = hasFeature(html, 'pug');
      this.includeTravis = props.travis;
    }.bind(this));
  },

  writing: function () {
    // Copy all .md files.
    this.fs.copy(
      this.templatePath('my-awesome-site/*.md'),
      this.destinationPath(this.project_name)
    );

    // Copy _posts directory.
    this.fs.copy(
      this.templatePath('my-awesome-site/_posts'),
      this.destinationPath(this.project_name + '/_posts')
    );

    // Copy all .xml files.
    this.fs.copy(
      this.templatePath('my-awesome-site/*.xml'),
      this.destinationPath(this.project_name)
    );

    // Copy all .yml files.
    this.fs.copy(
      this.templatePath('my-awesome-site/*.yml'),
      this.destinationPath(this.project_name)
    );

    // Copy Gemfile.
    this.fs.copy(
      this.templatePath('my-awesome-site/Gemfile'),
      this.destinationPath(this.project_name + '/Gemfile')
    );

    // Copy robots.txt.
    this.fs.copy(
      this.templatePath('my-awesome-site/robots.txt'),
      this.destinationPath(this.project_name + '/robots.txt')
    );

    // Copy all dotfiles.
    this.fs.copy(
      this.templatePath('my-awesome-site/.*'),
      this.destinationRoot(this.project_name)
    );

    // Handle .gitignore file.
    this.fs.copyTpl(
      this.templatePath('my-awesome-site/.gitignore'),
      this.destinationPath('.gitignore'),
      { includePug: this.includePug }
    );

    // Handle README file.
    this.fs.copyTpl(
      this.templatePath('my-awesome-site/README.md'),
      this.destinationPath('README.md'),
      {
        project_name: this.project_name,
        github_username: this.github_username,
        includeTravis: this.includeTravis
      }
    );

    // Handle package.json file.
    this.fs.copyTpl(
      this.templatePath('my-awesome-site/package.json'),
      this.destinationPath('package.json'),
      {
        project_name: this.project_name,
        github_username: this.github_username,
        github_url: this.github_url,
        project_description: this.project_description,
        includePug: this.includePug
      }
    );

    // Handle manifest.json file.
    this.fs.copyTpl(
      this.templatePath('my-awesome-site/manifest.json'),
      this.destinationPath('manifest.json'),
      { project_name: this.project_name }
    );

    // Handle manifest.webapp file.
    this.fs.copyTpl(
      this.templatePath('my-awesome-site/manifest.webapp'),
      this.destinationPath('manifest.webapp'),
      {
        project_name: this.project_name,
        project_description: this.project_description
      }
    );

    // Handle LICENSE file.
    this.fs.copyTpl(
      this.templatePath('my-awesome-site/LICENSE'),
      this.destinationPath('LICENSE'),
      { github_username: this.github_username }
    );

    // Copy _layouts directory.
    this.fs.copy(
      this.templatePath('my-awesome-site/_layouts'),
      this.destinationPath('_layouts')
    );

    // Copy images directory.
    this.fs.copy(
      this.templatePath('my-awesome-site/images'),
      this.destinationPath('images')
    );

    /// Copy index.html file.
    this.fs.copyTpl(
      this.templatePath('my-awesome-site/index.html'),
      this.destinationPath('index.html'),
      { includePug: this.includePug }
    );

    // Copy _includes directory.
    this.fs.copy(
      this.templatePath('my-awesome-site/_includes'),
      this.destinationPath('_includes')
    );

    // Copy _includes-pug directory according to HTML/Pug user choice.
    if (this.includePug) {
      this.fs.copy(
        this.templatePath('my-awesome-site/_includes-pug'),
        this.destinationPath('_includes-pug')
      );
    }

    // Temp - _sass.
    this.fs.copy(
      this.templatePath('my-awesome-site/_sass'),
      this.destinationPath('_sass')
    );

    // Temp - css.
    this.fs.copy(
      this.templatePath('my-awesome-site/css'),
      this.destinationPath('css')
    );

    // Handle gulpfile.
    this.fs.copyTpl(
      this.templatePath('my-awesome-site/gulpfile.babel.js'),
      this.destinationPath('gulpfile.babel.js'),
      { includePug: this.includePug }
    );

    // Copy travis file according to user choice.
    if (this.includeTravis) {
      this.fs.copy(
        this.templatePath('my-awesome-site/travis'),
        this.destinationPath('.travis.yml')
      );
    }

  },

  install: function () {
    this.installDependencies({
      bower: false
    });
  }
});
