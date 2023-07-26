import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cat } from '../../interfaces/Cat';

@Component({
  selector: 'app-cats-list',
  templateUrl: './cats-list.component.html',
  styleUrls: ['./cats-list.component.scss'],
})
export class CatsListComponent {
  cats$: Observable<Cat[]>;

  constructor(private store: Store<{ cats: Cat[] }>) {
    this.cats$ = store.select('cats');
    this.cats$.subscribe(cats => console.log(cats));
  }
}
