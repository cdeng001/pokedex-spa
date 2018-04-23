import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../classes/pokemon';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemon: Pokemon = null;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private location: Location
  ) { }

  ngOnInit() {
    this.loadPage();
  }

  loadPage(){
    const name = this.route.snapshot.paramMap.get('name');
    this.pokemonService.getPokemonData(name)
      .then( response => {
        this.pokemon = new Pokemon(
          response.id,
          response.name,
          response.base_experience,
          response.height,
          response.is_default,
          response.order,
          response.weight,
          response.abilities,
          response.forms,
          response.game_indices,
          response.held_items,
          response.location_area_encounters,
          response.moves,
          response.sprites,
          response.species,
          response.stats,
          response.types
        );
        console.log(this.pokemon);
      });

  }

}
