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
  cats$: Observable<Cat[]> = this.store.select('cats');

  constructor(private store: Store<{ cats: Cat[] }>) {}

  ngOnInit() {
    this.cats$.subscribe((cats) =>
      cats.length === 0 ? this.store.dispatch({ type: '[Cat] Load Cats' }) : null
    );
  }
}
