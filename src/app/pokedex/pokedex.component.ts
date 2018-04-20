import { Component, OnInit } from '@angular/core';
import { PokedexEntry } from '../classes/pokedexEntry';
import { PokedexService } from '../pokedex.service';
const Pokedex = require('pokeapi-js-wrapper');

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  pokedex = new Pokedex.Pokedex({
    protocol: 'https',
  });

  is_loading: boolean = false;
  error: boolean = false;

  pokemon_list: PokedexEntry[] = [];

  constructor(
    private pokedexService: PokedexService
  ) {}

  loadMore = function(){
    this.is_loading = true;

    this.pokedexService.getPokemonEntries(this.pokemon_list.length, 50)
      .then( entries => {
        entries = entries.map(p => {
          p.image_loaded = false;
          return p;
        });

        this.pokemon_list = this.pokemon_list.concat(entries);
        this.is_loading = false;
        this.error = false;
      })
      .catch(() => {
        this.error = true;
        this.is_loading = false;
      });
  }

  ngOnInit() {
    this.loadMore();
  }

}
