import './rxjs-extensions';
import { NgModule }      from '@angular/core';

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
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }