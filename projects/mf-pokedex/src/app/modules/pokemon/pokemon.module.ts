import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PokemonComponent],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    MatProgressSpinnerModule,
    MatCardModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class PokemonModule {}
