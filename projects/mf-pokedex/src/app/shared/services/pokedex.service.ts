import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PokedexService {
  constructor(private httpClient: HttpClient) {}

  getPokemon(request: any) {
    let params = new HttpParams()
      .set('offset', request.offset)
      .set('limit', request.size);

    return this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon', {
      params,
    });
  }

  getPokemonFromUrl(url: string) {
    return this.httpClient.get(url);
  }
}
