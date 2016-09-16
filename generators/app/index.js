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
      name: 'projectName',
      message: 'What will be your project name?',
      required: 'false'
    }, {
      // Prompts the user for the URL of the project's GitHub repo.
      type: 'input',
      name: 'githubUrl',
      message: 'What is the GitHub repository URL?',
      required: 'false'
    }, {
      // Prompts the user for his GitHub username.
      type: 'input',
      name: 'githubUsername',
      message: 'What is your GitHub username?',
      required: 'false'
    }, {
      // Prompts the user for his GitHub username.
      type: 'input',
      name: 'projectDescription',
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
        value: 'stylesheets',
        checked: false
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
      this.projectName = props.projectName;
      this.githubUsername = props.githubUsername;
      this.githubUrl = props.githubUrl;
      this.projectDescription = props.projectDescription;

      function hasFeature(features, feat) {
        return features && features.indexOf(feat) !== -1;
      }

      // manually deal with the response, get back and store the results.
      // we change a bit this way of doing to automatically do this in the self.prompt() method.
      this.includePug = hasFeature(props.html, 'pug');
      this.includeCss = hasFeature(props.css, 'stylesheets');
      this.includeSass = hasFeature(props.css, 'sass');
      this.includeScss = hasFeature(props.css, 'scss');
      this.includeTravis = props.travis;
      this.includeES = props.es;
    }.bind(this));
  },

  writing: function () {
    // Copy all .md files.
    this.fs.copy(
      this.templatePath('my-awesome-site/*.md'),
      this.destinationPath(this.projectName)
    );

    // Copy _posts directory.
    this.fs.copy(
      this.templatePath('my-awesome-site/_posts'),
      this.destinationPath(this.projectName + '/_posts')
    );

    // Copy all .xml files.
    this.fs.copy(
      this.templatePath('my-awesome-site/*.xml'),
      this.destinationPath(this.projectName)
    );

    // Copy all .yml files.
    this.fs.copy(
      this.templatePath('my-awesome-site/*.yml'),
      this.destinationPath(this.projectName)
    );

    // Copy Gemfile.
    this.fs.copy(
      this.templatePath('my-awesome-site/Gemfile'),
      this.destinationPath(this.projectName + '/Gemfile')
    );

    // Copy robots.txt.
    this.fs.copy(
      this.templatePath('my-awesome-site/robots.txt'),
      this.destinationPath(this.projectName + '/robots.txt')
    );

    // Copy all dotfiles.
    this.fs.copy(
      this.templatePath('my-awesome-site/.*'),
      this.destinationRoot(this.projectName)
    );

    // Handle .babelrc file.
    this.fs.copyTpl(
      this.templatePath('my-awesome-site/.babelrc'),
      this.destinationPath('.babelrc'), {
        includeES: !this.includeES
      });

    // Handle .gitignore file.
    this.fs.copyTpl(
      this.templatePath('my-awesome-site/.gitignore'),
      this.destinationPath('.gitignore'), {
        includeSass: this.includeSass,
        includeScss: this.includeScss
      });

    // Handle README file.
    this.fs.copyTpl(
      this.templatePath('my-awesome-site/README.md'),
      this.destinationPath('README.md'), {
        projectName: this.projectName,
        githubUsername: this.githubUsername,
        includeTravis: this.includeTravis
      });

    // Handle package.json file.
    this.fs.copyTpl(
      this.templatePath('my-awesome-site/package.json'),
      this.destinationPath('package.json'), {
        projectName: this.projectName,
        githubUsername: this.githubUsername,
        githubUrl: this.githubUrl,
        projectDescription: this.projectDescription,
        includePug: this.includePug,
        includeSass: this.includeSass,
        includeScss: this.includeScss
      });

    // Handle manifest.json file.
    this.fs.copyTpl(
      this.templatePath('my-awesome-site/manifest.json'),
      this.destinationPath('manifest.json'), {
        projectName: this.projectName
      });

    // Handle manifest.webapp file.
    this.fs.copyTpl(
      this.templatePath('my-awesome-site/manifest.webapp'),
      this.destinationPath('manifest.webapp'), {
        projectName: this.projectName,
        projectDescription: this.projectDescription
      });

    // Handle LICENSE file.
    this.fs.copyTpl(
      this.templatePath('my-awesome-site/LICENSE'),
      this.destinationPath('LICENSE'), {
        githubUsername: this.githubUsername
      });

    // Copy _layouts directory.
    this.fs.copy(
      this.templatePath('my-awesome-site/_layouts'),
      this.destinationPath('_layouts')
    );

    // Copy scripts directory.
    this.fs.copy(
      this.templatePath('my-awesome-site/_scripts/main'),
      this.destinationPath('_scripts/main.js')
    );

    // Copy images directory.
    this.fs.copy(
      this.templatePath('my-awesome-site/images'),
      this.destinationPath('images')
    );

    // Copy index.html file.
    this.fs.copyTpl(
      this.templatePath('my-awesome-site/index.html'),
      this.destinationPath('index.html'), {
        includePug: this.includePug
      });

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

    // Copy css directory.
    if (this.includeCss) {
      this.fs.copy(
        this.templatePath('my-awesome-site/css'),
        this.destinationPath('css')
      );
    }

    // Copy SASS directory.
    if (this.includeSass) {
      this.fs.copy(
        this.templatePath('my-awesome-site/sass'),
        this.destinationPath('sass')
      );
    }

    // Copy SCSS directory.
    if (this.includeScss) {
      this.fs.copy(
        this.templatePath('my-awesome-site/scss'),
        this.destinationPath('scss')
      );
    }

    // Handle gulpfile.
    this.fs.copyTpl(
      this.templatePath('my-awesome-site/gulpfile.babel'),
      this.destinationPath('gulpfile.babel.js'), {
        includePug: this.includePug,
        includeSass: this.includeSass,
        includeScss: this.includeScss,
        includeES: this.includeES
      });

    // Copy travis file according to user choice.
    if (this.includeTravis) {
      this.fs.copy(
        this.templatePath('my-awesome-site/travis'),
        this.destinationPath('.travis.yml')
      );
    }

    // Copy humans.txt file.
    this.fs.copyTpl(
      this.templatePath('my-awesome-site/humans.txt'),
      this.destinationPath('humans.txt'), {
        githubUsername: this.githubUsername
      });
  },

  install: function () {
    this.installDependencies({
      bower: false
    });
  }
});
