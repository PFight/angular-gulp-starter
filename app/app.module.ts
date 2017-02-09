import './rxjs-extensions';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';

import { DashboardModule } from './dashboard/dashboard.module';
import { HeroesModule } from './heroes/heroes.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    DashboardModule,
    HeroesModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [Location, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }