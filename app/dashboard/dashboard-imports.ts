import * as Heroes from '../heroes/heroes-exports';
import * as Models from '../models/models-exports';

// NGC bug fix (we can't use Heroes.HeroesModule in dashboard.module imports)
var Modules = {
  HeroesModule: Heroes.HeroesModule
}

export { Heroes, Models, Modules };