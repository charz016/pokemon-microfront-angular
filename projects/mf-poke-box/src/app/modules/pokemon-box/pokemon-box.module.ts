import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonBoxRoutingModule } from './pokemon-box-routing.module';
import { PokemonBoxComponent } from './pokemon-box.component';


@NgModule({
  declarations: [
    PokemonBoxComponent
  ],
  imports: [
    CommonModule,
    PokemonBoxRoutingModule
  ]
})
export class PokemonBoxModule { }
