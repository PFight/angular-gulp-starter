import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from "@angular/core";

import { AppModuleNgFactory } from '../app-aot/app/app.module.ngfactory';

enableProdMode();

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/