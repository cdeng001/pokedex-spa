import { Injectable } from '@angular/core';
import { PokedexEntry } from './classes/pokedexEntry';
const Pokedex = require('pokeapi-js-wrapper');
const pokedex = new Pokedex.Pokedex({
  protocol: 'https',
});

@Injectable()
export class PokedexService {

  constructor() { }

  getPokemonEntries(offset: number, limit: number){
    return pokedex.getPokemonsList({
      'offset' : offset,
      'limit' : limit,
    })
      .then(function(response) {
        return response.results.map( (item, index) => {
          const id: number = index + offset + 1;
          return {
            name: item.name,
            icon: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
            id
          };
        });
      });
  }

}
