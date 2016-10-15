# Angular 2 ES6 QuickStart
The super-simple [Angular 2](https://angular.io/) quickstarter with ES6/[Babel](https://babeljs.io/) instead of [TypeScript](https://www.typescriptlang.org/). Built with [gulp](http://gulpjs.com/), bundled with [webpack](https://github.com/webpack/webpack).

Based on the official [Angular 2 QuickStarter](https://angular.io/docs/ts/latest/quickstart.html).

## Setup
Run the following two commands inside the project folder after each other to get it up and running.

    npm i

    gulp

This will install all packages, transpile ES6 to ES5 (with sourcemaps for debugging), run a server at [localhost:3000](http://localhost:3000) and watch the source files for changes.

## Guide
### Configuring Babel for Angular 2
After we've set up our [gulpfile.js](https://github.com/rbnlffl/angular2-babel-quickstart/blob/master/gulpfile.js), we need to install presets for Babel so it knows what language the source code is written in and what framework we use. We do this by npm-installing `babel-preset-es2015` and `babel-preset-angular2`. When that's done, all we need to do is including these two presets in [.babelrc](https://github.com/rbnlffl/angular2-babel-quickstart/blob/master/.babelrc) and finito.

### Including Stuff in [index.html](https://github.com/rbnlffl/angular2-babel-quickstart/blob/master/src/index.html)
Since Angular 2 uses stuff that is still experimental, it's wise to include polyfills and fallbacks. By name, these are [core-js](https://github.com/zloirock/core-js), [reflect-metadata](https://www.npmjs.com/package/reflect-metadata), [rxjs](https://www.npmjs.com/package/rxjs) and [zone.js](https://github.com/angular/zone.js/). All of these libraries get concatenated and then minified into bundle.js, which will then be included in [index.html](https://github.com/rbnlffl/angular2-babel-quickstart/blob/master/src/index.html).

### What's in [package.json](https://github.com/rbnlffl/angular2-babel-quickstart/blob/master/package.json)
You've probably wondered where the fuck that Angular 2 magic comes from. Well, it all originates from npm packages. You see all those `@angular/` dependencies? That's it. They then get used in [main.js](https://github.com/rbnlffl/angular2-babel-quickstart/blob/master/src/js/main.js) or wherever via `import` statements.

## Any Questions?
Hopefully my little starter helped understand the setup process for Angular 2 projects. If you need further assistance or encounter any problems, feel free to open an issue. A list of other Angular 2 + Babel starters can be found [here](https://github.com/AngularClass/awesome-angular2#angular-2-in-babel).

## ToDo
* Add LiveReload
