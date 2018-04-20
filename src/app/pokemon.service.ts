import { Injectable } from '@angular/core';
import { Pokemon } from './classes/pokemon';
const Pokedex = require('pokeapi-js-wrapper');
const pokedex = new Pokedex.Pokedex({
  protocol: 'https',
});

@Injectable()
export class PokemonService {

  constructor() { }

  getPokemonData(name: string){
    return pokedex.getPokemonByName(name)
      .then( response => {
        return response;
      });
  }

}
