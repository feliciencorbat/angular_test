import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../pokemon";
import {Router} from "@angular/router";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  pokemonSelected: Pokemon|undefined;

  constructor(private router: Router, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe(pokemonList => this.pokemonList = pokemonList);
  }

  selectPokemon(pokemonId: string): void {
    this.pokemonSelected = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
  }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id])
  }

}
