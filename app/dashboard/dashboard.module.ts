import '../rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component/dashboard.component';
import { Modules } from './dashboard-imports';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DashboardRoutingModule,
    Modules.HeroesModule
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [ ]
})
export class DashboardModule { }