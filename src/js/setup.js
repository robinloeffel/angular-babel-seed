/*
    *********************************
    ** ANGULAR 2 QUICKSTART CONFIG **
    *********************************

    lightly modified; original can be found at
    https://angular.io/docs/ts/latest/quickstart.html#!#add-config-files
*/

(global => {
    let map = {
        'app': 'js/',
        '@angular': 'https://unpkg.com/@angular',
        'rxjs': 'https://unpkg.com/rxjs@5.0.0-beta.6'
    };

    let packages = {
        'app': {
            main: 'main.js',
            defaultExtension: 'js'
        },
        'rxjs': {
            defaultExtension: 'js'
        }
    };

    let ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'router-deprecated',
        'upgrade',
    ];

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

    let setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

    ngPackageNames.forEach(setPackageConfig);

    packages['@angular/router'] = {
        main: 'index.js',
        defaultExtension: 'js'
    };

    let config = {
        map: map,
        packages: packages
    };

    System.config(config);

    System.import('app').catch((err) => {
        console.error(err);
    });
})(this);
