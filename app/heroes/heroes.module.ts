import '../rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { HeroesRoutingModule } from './heroes-routing.module';

import { HeroesComponent }      from './components/heroes/heroes.component';
import { HeroDetailComponent }  from './components/hero-detail/hero-detail.component';;
import { HeroService }          from './services/hero.service';
import { HeroSearchComponent }  from './components/hero-search/hero-search.component';

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
  bootstrap: [],
  exports: [ HeroSearchComponent ]
})
export class HeroesModule { }