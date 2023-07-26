import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-cats-list></app-cats-list>',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Liste des chats';
}
