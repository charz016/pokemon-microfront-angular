import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { CommonsLibService } from '@commons-lib';

@Component({
  selector: 'app-pokemon-box',
  templateUrl: './pokemon-box.component.html',
  styleUrls: ['./pokemon-box.component.scss'],
})
export class PokemonBoxComponent {
  listCatch: any[] = [];

  constructor(private commonLibs: CommonsLibService) {}

  ngOnInit(): void {
    this.commonLibs.pokedex$.subscribe((list: any) => {
      this.listCatch = list;
    });
  }

  drop(event: CdkDragDrop<any>) {
    this.listCatch[event.previousContainer.data.index] =
      event.container.data.item;
      
    this.listCatch[event.container.data.index] =
      event.previousContainer.data.item;
  }
}
