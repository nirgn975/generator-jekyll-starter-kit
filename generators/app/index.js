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
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?2',
      default: true
    }];

    // var prompts = [{
    //   type: 'checkbox',
    //   name: 'features',
    //   message: 'What do you want to make today?',
    //   choices: [
    //     {
    //     name: ' a client.com project',
    //     value: 'includeClient',
    //     checked: true
    //     }, {
    //     name: ' a front-end project',
    //     value: 'includeFrontEnd',
    //     checked: false
    //     }, {
    //     name: ' a marketing project',
    //     value: 'includeMarketing',
    //     checked: false
    //     }, {
    //     name: ' an email project',
    //     value: 'includeEmail',
    //     checked: false
    //     }
    //   ]
    // }];

    // var prompts = [{
    //   type: 'list',
    //   name: 'features',
    //   message: 'What do you want to make today?',
    //   choices: [
    //     {
    //     name: ' a client.com project',
    //     value: 'includeClient',
    //     checked: true
    //     }, {
    //     name: ' a front-end project',
    //     value: 'includeFrontEnd',
    //     checked: false
    //     }, {
    //     name: ' a marketing project',
    //     value: 'includeMarketing',
    //     checked: false
    //     }, {
    //     name: ' an email project',
    //     value: 'includeEmail',
    //     checked: false
    //     }
    //   ]
    // }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('my-awesome-site'),
      this.destinationPath('my-awesome-site')
    );
  },

  install: function () {
    this.installDependencies();
  }
});
