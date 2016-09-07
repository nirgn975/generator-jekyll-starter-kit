'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

// Build the Jekyll Site
gulp.task('jekyll-build', () => {
  console.log('in jekyll build task');
});

// Default task.
gulp.task('default');
