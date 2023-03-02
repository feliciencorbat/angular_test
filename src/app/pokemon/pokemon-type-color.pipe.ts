import { Pipe, PipeTransform } from '@angular/core';
  
/*
 * Affiche la couleur correspondant au type du pokémon.
 * Prend en argument le type du pokémon.
 * Exemple d'utilisation:
 *   {{ pokemon.type | pokemonTypeColor }}
*/
@Pipe({name: 'pokemonTypeColor'})
export class PokemonTypeColorPipe implements PipeTransform {
  transform(type: string): string {
  
    let color: string;
  
    switch (type) {
      case 'Feu':
        color = 'text-bg-danger';
        break;
      case 'Eau':
        color = 'text-bg-primary';
        break;
      case 'Plante':
        color = 'text-bg-success';
        break;
      case 'Insecte':
        color = 'text-bg-danger';
        break;
      case 'Normal':
        color = 'text-bg-secondary';
        break;
      case 'Vol':
        color = 'text-bg-info';
        break;
      case 'Poison':
        color = 'text-bg-danger';
        break;
      case 'Fée':
        color = 'text-bg-danger';
        break;
      case 'Psy':
        color = 'text-bg-dark';
        break;
      case 'Electrik':
        color = 'text-bg-warning';
        break;
      case 'Combat':
        color = 'text-bg-danger';
        break;
      default:
        color = 'text-bg-light';
        break;
    }
  
    return 'badge rounded-pill ' + color;
  
  }
}
