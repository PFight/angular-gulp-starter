import '../rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { HeroesModule } from "../heroes/heroes.module";

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeroesModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [ ],
  bootstrap: [ ]
})
export class DashboardModule { }