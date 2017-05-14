# Angular 2/4 ES6 Seed
The super simple [Angular](https://angular.io/) quickstarter with ES6 ([Babel](https://babeljs.io/)) instead of [TypeScript](https://www.typescriptlang.org/). Built with [gulp](http://gulpjs.com/), bundled with [webpack](https://github.com/webpack/webpack).


Based on the official [Angular QuickStarter](https://angular.io/docs/ts/latest/quickstart.html).

![Angular Babel Seed in action][https://github.com/rbnlffl/angular-babel-seed/blob/master/screencap.png]

## Setup
After cloning or downloading this repo, run the following two commands inside the project folder to get it up and running.

    yarn

    yarn start

This will install all packages, transpile ES6 to ES5, Sass to CSS, run a server at [localhost:8080](http://localhost:8080) and watch the sources. If you want to additionally minify your project, run `yarn prod` insted of `yarn start`.

_You can also use npm to install and run this project. However, since I develop with yarn myself, I cannot guarantee it works as intended._

## Guide
### Configuring Babel for Angular 2 and 4
After we've set up our [gulpfile.js](https://github.com/rbnlffl/angular-babel-seed/blob/master/gulpfile.js), we need to install presets for Babel so it knows what language the source code is written in and what framework we use. We do this by installing `babel-preset-es2015` and `babel-preset-angular2`. When that's done, all we need to do is including these two presets in [.babelrc](https://github.com/rbnlffl/angular-babel-seed/blob/master/.babelrc) and finito.

### Including Stuff in [index.html](https://github.com/rbnlffl/angular-babel-seed/blob/master/src/index.html)
Since Angular uses things that are still experimental and bleeding edge, it's wise to include polyfills and fallbacks for older browsers. By name, these are [core-js](https://github.com/zloirock/core-js), [reflect-metadata](https://www.npmjs.com/package/reflect-metadata), [rxjs](https://www.npmjs.com/package/rxjs) and [zone.js](https://github.com/angular/zone.js/). All of these libraries get concatenated and then minified into bundle.js, which will then be referenced in [index.html](https://github.com/rbnlffl/angular-babel-seed/blob/master/src/index.html). Since we use webpack for bundling, our written Angular code gets included to bundle.js as well. So we do not need to worry about referencing our logic inside the HTML files.

### What's in [package.json](https://github.com/rbnlffl/angular-babel-seed/blob/master/package.json)
You've probably wondered where that minty Angular magic comes from. It all originates from npm packages. You see all those `@angular/` dependencies? That's it. They then get used in [main.js](https://github.com/rbnlffl/angular-babel-seed/blob/master/src/js/main.js) via `import` statements. Inside package.json, you'll also find the aforementioned polyfills.

## Any Questions?
Hopefully my starter helped understand the unnecessarily complicated setup process for Angular projects. If you need further assistance or encounter any problems, feel free to open an issue. A list of other Angular 2 + Babel starters can be found [here](https://github.com/AngularClass/awesome-angular2#angular-2-in-babel).

## ToDo
* Extend the readme
