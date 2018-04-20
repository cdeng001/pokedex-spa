export class Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    //abilities:
    //forms:
    //game_indices:
    //held_items:
    location_area_encounters: string;
    //moves:
    //sprites:
    //species:
    //stats:
    //types:

    constructor(
      id: number,
      name: string,
      base_experience: number,
      height: number,
      is_default: boolean,
      order: number,
      weight: number,
      //abilities:,
      //forms:,
      //game_indices:,
      //held_items:,
      location_area_encounters: string,
      //moves:,
      //sprites:,
      //species:,
      //stats:,
      //types:
    ){
      this.id = id;
      this.name = name;
      this.base_experience = base_experience;
      this.height = height;
      this.is_default = is_default;
      this.order = order;
      this.weight = weight;
      //this.abilities:
      //this.forms:
      //this.game_indices:
      //this.held_items:
      this.location_area_encounters = location_area_encounters;
      //this.moves:
      //this.sprites:
      //this.species:
      //this.stats:
      //this.types:
    }
  }