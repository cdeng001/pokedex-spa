export class Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: object[];
    forms: object[];
    game_indices: object[];
    held_items: object[];
    location_area_encounters: string;
    moves: object[];
    sprites: object;
    species: object;
    stats: object[];
    types: object[];

    constructor(
      id: number,
      name: string,
      base_experience: number,
      height: number,
      is_default: boolean,
      order: number,
      weight: number,
      abilities: object[],
      forms: object[],
      game_indices: object[],
      held_items: object[],
      location_area_encounters: string,
      moves: object[],
      sprites: object,
      species: object,
      stats: object[],
      types: object[]
    ){
      this.id = id;
      this.name = name;
      this.base_experience = base_experience;
      this.height = height;
      this.is_default = is_default;
      this.order = order;
      this.weight = weight;
      this.abilities = abilities;
      this.forms = forms;
      this.game_indices = game_indices;
      this.held_items = held_items;
      this.location_area_encounters = location_area_encounters;
      this.moves = moves;
      this.sprites = sprites;
      this.species = species;
      this.stats = stats;
      this.types = types;
    }
  }