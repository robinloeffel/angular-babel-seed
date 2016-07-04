# Angular 2 ES6 QuickStart
The super-simple [Angular 2](https://angular.io/) quickstarter with ES6/[Babel](https://babeljs.io/) instead of [TypeScript](https://www.typescriptlang.org/). Built with [gulp](http://gulpjs.com/).

Based on the official [Angular 2 QuickStarter](https://angular.io/docs/ts/latest/quickstart.html).

## Setup
Run the following two commands inside the project folder after each other to get it up and running.

    npm i

    gulp

This will install all packages, transpile ES6 to ES5 (with sourcemaps for debugging) and run a server at [localhost:3000](http://localhost:3000).

## Guide
### Configuring Babel for Angular 2
After we've set up our gulpfile, we need to install to presets for Babel so it knows what language the source code is written in and what framework we use. We do this by npm-installing `babel-preset-es2015` and `babel-preset-angular2`. When that's done all we need to do is including these two presets in .babelrc and we're done here.

### Including Stuff Inside index.html
Since Angular 2 is experimental, we need to include polyfills and fallbacks. These are [core-js](https://github.com/zloirock/core-js), [reflect-metadata](https://www.npmjs.com/package/reflect-metadata) and [zone.js](https://github.com/angular/zone.js/). Also, because the quickstarter isn't using anything like [rollup.js](http://rollupjs.org/) or [Browserify](http://browserify.org/), we need to include [systemjs](https://github.com/systemjs/systemjs) which allows us to `require` things inside the client-side JavaScript.

### What's Inside package.json
You've probably wondered where the fuck that Angular 2 magic comes from. Well, it all originates from npm packages. You see all those `@angular/` dependencies in package.json? That's it. They're prefixed with an @ simply because this tells npm to put them in the same folder. They then get imported in main.es6.js or wherever via `import` statements.

## u dun here brah/gurl?
Hopefully my little starter helped understand the setup process for Angular 2 projects. If you need further assistance, feel free to open an issue. Another seed project for Angular 2 with Babel can be found [here](https://github.com/shuhei/babel-angular2-app).
