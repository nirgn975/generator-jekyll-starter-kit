"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-html-css-es2015-sw-travis", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({
        projectName: "name",
        githubUrl: "url",
        githubUsername: "username",
        projectDescription: "description",
        html: "html",
        css: "stylesheets",
        es: true,
        sw: true,
        travis: true,
        deploy: "github",
      })
      .toPromise();
  });

  it("creates files", () => {
    assert.file([
      "_includes",
      "_layouts",
      "_posts",
      "_scripts",
      "css",
      "images",
      "_config.yml",
      ".babelrc",
      ".gitignore",
      "about.markdown",
      "Gemfile",
      "gulpfile.babel.js",
      "humans.txt",
      "index.html",
      "LICENSE",
      "manifest.json",
      "manifest.webapp",
      "package.json",
      "README.md",
      "robots.txt",
      ".travis.yml",
    ]);
  });

  it("not created files", () => {
    assert.noFile([
      "_includes-pug",
      "scss",
      "sass",
      ".firebaserc",
      "firebase.json",
    ]);
  });

  it("fills package.json with correct information", () => {
    assert.jsonFileContent("package.json", {
      name: "name",
      description: "description",
      author: "username",
      repository: {
        url: "url",
      },
    });
  });

  it("fills the README with project data", () => {
    assert.fileContent("README.md", "name");
  });

  it("fills the LICENSE with project data", () => {
    assert.fileContent("LICENSE", "name");
  });

  it("gulpfile content", () => {
    assert.fileContent("gulpfile.babel.js", "$.babel()");
    assert.fileContent("gulpfile.babel.js", "$.ghPages()");
    assert.fileContent("gulpfile.babel.js", "swPrecache.write");
  });
});

describe("generator-pug-scss-travis", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({
        projectName: "name",
        githubUrl: "url",
        githubUsername: "username",
        projectDescription: "description",
        html: "pug",
        css: "scss",
        es: false,
        sw: false,
        travis: true,
        deploy: "firebase",
      })
      .toPromise();
  });

  it("creates files", () => {
    assert.file([
      "_includes-pug",
      "scss",
      ".travis.yml",
      ".firebaserc",
      "firebase.json",
    ]);
  });

  it("not created files", () => {
    assert.noFile(["css", "sass"]);
  });

  it("gulpfile content", () => {
    assert.noFileContent("gulpfile.babel.js", "$.babel()");
    assert.noFileContent("gulpfile.babel.js", "swPrecache.write");
  });
});

describe("generator-pug-sass-no_travis", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({
        projectName: "name",
        githubUrl: "url",
        githubUsername: "username",
        projectDescription: "description",
        html: "pug",
        css: "sass",
        es: true,
        sw: true,
        travis: false,
        deploy: "firebase",
      })
      .toPromise();
  });

  it("creates files", () => {
    assert.file(["_includes-pug", "sass"]);
  });

  it("not created files", () => {
    assert.noFile(["css", "scss", ".travis.yml"]);
  });

  it("humans.txt content", () => {
    assert.fileContent("humans.txt", "name");
  });
});
