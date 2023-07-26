import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cat } from '../../interfaces/Cat';
import { CatService } from 'src/app/services/cat.service';
import { getAllCats } from 'src/app/store/cat.actions';

@Component({
  selector: 'app-cats-list',
  templateUrl: './cats-list.component.html',
  styleUrls: ['./cats-list.component.scss'],
})
export class CatsListComponent {
  cats$: Observable<Cat[]>;

  constructor(private store: Store<{ cats: Cat[] }>, private catService: CatService) {
    this.cats$ = store.select('cats');
    this.cats$.subscribe(cats => console.log(cats));
  }
}
