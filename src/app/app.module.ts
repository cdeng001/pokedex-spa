import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { CapitalizePipe } from './capitalize.pipe';
import { AppRoutingModule } from './/app-routing.module';
import { PokedexService } from './pokedex.service';
import { PokemonService } from './pokemon.service';


@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokedexComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    PokedexService,
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
