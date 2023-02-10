import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { CommonsLibService } from '@commons-lib';
import { concatMap, from, finalize } from 'rxjs';
import { PokedexService } from '../../shared/services/pokedex.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  constructor(
    private pokedexService: PokedexService,
    private commonsLibService: CommonsLibService
  ) {}

  list: any[] = [];

  loading!: boolean;

  total!: any;

  request = {
    offset: 0,
    page: 1,
    size: 20,
  };

  ngOnInit(): void {
    this.getListPokemon(this.request);
  }

  getListPokemon(request: any) {
    this.pokedexService.getPokemon(request).subscribe((response: any) => {
      this.total = response.count;
      this.getListDetailPokemon(response.results);
    });
  }

  getListDetailPokemon(results: any[]) {
    this.loading = true;
    this.list = [];

    from(results)
      .pipe(
        concatMap((item: any) =>
          this.pokedexService.getPokemonFromUrl(item.url)
        ),
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe((response) => this.list.push(response));
  }

  onChangePage(event: any) {
    this.request.page = event.pageIndex + 1;
    this.request.size = event.pageSize;

    this.request.offset = (this.request.page - 1) * this.request.size;

    this.getListPokemon(this.request);
  }

  clickCard(item: any): void {
    this.commonsLibService.savePokemon(item);
  }
}
