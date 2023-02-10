import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonBoxRoutingModule } from './pokemon-box-routing.module';
import { PokemonBoxComponent } from './pokemon-box.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [PokemonBoxComponent],
  imports: [
    CommonModule,
    PokemonBoxRoutingModule,
    MatProgressSpinnerModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    DragDropModule,
  ],
})
export class PokemonBoxModule {}
