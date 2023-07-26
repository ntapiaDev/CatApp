import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="/">Accueil</a> - <a routerLink="/ajouter-un-chat">Ajouter un chat...</a>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Liste des chats';
}
