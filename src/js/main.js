import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);
