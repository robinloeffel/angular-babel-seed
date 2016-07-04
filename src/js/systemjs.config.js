'use strict';

/*
    *********************************
    ** ANGULAR 2 QUICKSTART CONFIG **
    *********************************

    see https://angular.io/docs/ts/latest/quickstart.html#!#add-config-files
*/

(function (global) {
    var map = {
        'app': 'src/js/',
        '@angular': 'node_modules/@angular',
        'rxjs': 'node_modules/rxjs'
    };

    var packages = {
        'app': {
            main: 'main.js',
            defaultExtension: 'js'
        },
        'rxjs': {
            defaultExtension: 'js'
        }
    };

    var ngPackageNames = ['common', 'compiler', 'core', 'forms', 'http', 'platform-browser', 'platform-browser-dynamic', 'router', 'router-deprecated', 'upgrade'];

    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = {
            main: 'index.js',
            defaultExtension: 'js'
        };
    }

    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = {
            main: '/bundles/' + pkgName + '.umd.js',
            defaultExtension: 'js'
        };
    }

    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

    ngPackageNames.forEach(setPackageConfig);

    packages['@angular/router'] = {
        main: 'index.js',
        defaultExtension: 'js'
    };

    var config = {
        map: map,
        packages: packages
    };

    System.config(config);
})(undefined);
//# sourceMappingURL=systemjs.config.js.map
