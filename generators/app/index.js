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
      type: 'String',
      name: 'project_name',
      message: 'What will be your project name?',
      required: 'false'
    }, {
      // Prompts the user for the URL of the project's GitHub repo.
      type: 'String',
      name: 'github_url',
      message: 'What is the GitHub repository URL?',
      required: 'false'
    }, {
      // Prompts the user for his GitHub username.
      type: 'String',
      name: 'github_username',
      message: 'What is your GitHub username?',
      required: 'false'
    }, {
      // Prompts the user to pick a templating engine.
      type: 'list',
      name: 'html',
      message: 'What Template Engine do you want to use?',
      choices: [
        {
        name: ' HTML',
        value: 'html',
        checked: true
        }, {
        name: ' Jade',
        value: 'jade',
        checked: false
        }
      ]
    }, {
      // Prompts the user to choose stylesheets.
      type: 'list',
      name: 'css',
      message: 'What Stylesheets do you want to use?',
      choices: [
        {
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
        }
      ]
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
      message: 'Would you like to enable HTMLProofer to validate your Jekyll output?',
      default: true
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
      console.log(props);
      this.props.someAnswer = 'foo';
    }.bind(this));
  },

  writing: function () {
    // Copy all non-dotfiles
    this.fs.copy(
      this.templatePath('my-awesome-site'),
      this.destinationPath(this.props.project_name)
    );

    // Copy all dotfiles
    this.fs.copy(
      this.templatePath('my-awesome-site/.*'),
      this.destinationRoot(this.props.project_name)
    );

    // Handle package.json file.
    this.fs.copyTpl(
      this.templatePath('my-awesome-site/package.json'),
      this.destinationPath('package.json'),
      {
        project_name: this.props.project_name,
        github_username: this.props.github_username,
        github_url: this.props.github_url
      }
    );

    // Handle LICENSE file.
    this.fs.copyTpl(
      this.templatePath('my-awesome-site/LICENSE'),
      this.destinationPath('LICENSE'),
      { github_username: this.props.github_username }
    );

  },

  install: function () {
    this.installDependencies();
  }
});
