import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <p class="container">
      Erreur 404: Page non trouvée
      <a routerLink="/">Retourner à l'accueil</a>
    </p>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent {

}
