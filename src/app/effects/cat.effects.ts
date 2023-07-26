import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { CatService } from '../services/cat.service';
import { getAllCats } from '../store/cat.actions';

@Injectable()
export class CatEffects {

  loadCats$ = createEffect(() => this.actions$.pipe(
    ofType('[Cat] Load Cats'),
    exhaustMap(() => this.catService.getAllCats()
      .pipe(
        // map(cats => ({ type: '[Cat] Get All Cats', payload: cats })),
        map(cats => getAllCats({ cats })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private catService: CatService
  ) {}
}
