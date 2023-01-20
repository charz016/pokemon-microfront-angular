import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('mfPokedex/PokedexModule').then((m) => m.PokemonModule),
  },
  {
    path: 'pokemon-box',
    loadChildren: () =>
      import('mfPokeBox/PokeBoxModule').then((m) => m.PokemonBoxModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
