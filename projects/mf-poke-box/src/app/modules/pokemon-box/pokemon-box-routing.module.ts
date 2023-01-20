import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonBoxComponent } from './pokemon-box.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonBoxComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonBoxRoutingModule {}
