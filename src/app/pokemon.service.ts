import { Injectable } from '@angular/core';
import { Pokemon } from './classes/pokemon';
const Pokedex = require('pokeapi-js-wrapper');
const pokedex = new Pokedex.Pokedex({
  protocol: 'https',
});

const SMOGON_API_URI = 'https://www.smogon.com/dex/_rpc/dump-';
const SMOGON_GEN_EP = 'gen';
const SMOGON_BASICS_EP = 'basics';
const SMOGON_POKEMON_EP = 'pokemon';
const META = 'sm';

@Injectable()
export class PokemonService {

  constructor() { }

  getPokemonData(name: string){
    return pokedex.getPokemonByName(name)
      .then( response => {
        return response;
      });
  }

  getPokemonFormat(name: string){
    let payload = {
      "gen": META,
      "alias": name,
    }

    return fetch('https://www.smogon.com/dex/_rpc/dump-'+SMOGON_BASICS_EP,
      {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }
    )
    .then( response => {
      console.log(response);
      return response["pokemon"].find(function (obj) { 
        return obj.name === name; 
      });
    });
  }

}
