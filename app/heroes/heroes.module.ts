import '../rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { HeroesRoutingModule } from './heroes-routing.module';

import { HeroesComponent } from './heroes.component/heroes.component';
import { HeroDetailComponent } from './hero-detail.component/hero-detail.component';
import { HeroSearchComponent } from './hero-search.component/hero-search.component';
import { HeroService } from './services/hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeroesRoutingModule
  ],
  declarations: [
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  providers: [ HeroService ],
  exports: [ HeroSearchComponent ]
})
export class HeroesModule { }