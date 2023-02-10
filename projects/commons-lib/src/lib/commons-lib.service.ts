import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICommonProduct } from './models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CommonsLibService {
  private pokeList: any[] = [];
  pokedex$: BehaviorSubject<any> = new BehaviorSubject(null);
  lengthPokedex$: BehaviorSubject<any> = new BehaviorSubject(0);

  savePokemon(pokemon: any[]): void {
    this.pokeList.push(pokemon);
    this.lengthPokedex$.next(this.pokeList.length);
    this.pokedex$.next(this.pokeList);
  }
  deletePokemon(index: number) {
    this.pokeList.splice(index, 1);
    this.pokedex$.next(this.pokeList);
    this.lengthPokedex$.next(this.pokeList.length);
  }

  clearPokemon(): void {
    this.pokedex$.next([]);
  }
}
