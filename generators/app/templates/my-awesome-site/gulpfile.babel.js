'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';

const $ = gulpLoadPlugins();

<% if (includeHTML) { -%>
// Minify the HTML.
gulp.task('minify-html', () => {
  return gulp.src('_site/**/*.html')
    .pipe($.htmlmin({
      removeComments: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeRedundantAttributes: true,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      removeOptionalTags: true
    }))
    .pipe(gulp.dest('_site'))
});
<% } -%>

<% if (includePug) { -%>
// Pug (Jade) to HTML.
gulp.task('pug', () => {
  return gulp.src([
    '_site/**/*.pug',
    '!_site/node_modules/**'
  ])
  .pipe($.pug())
  .pipe(gulp.dest('_site'))
});
<% } -%>

gulp.task('jekyll-build', $.shell.task([ 'jekyll build' ]));

// Default task.
gulp.task('default', () =>
  runSequence(
    'jekyll-build',
    [
<% if (includeHTML) { -%>
      'minify-html'
<% } else { -%>
      'pug'
<% } -%>
    ]
  )
);
