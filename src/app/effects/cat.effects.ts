import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { getAllCats, getAllCatsSuccess } from '../store/cat.actions';
import { CatService } from '../services/cat.service';

@Injectable()
export class CatEffects {
  constructor(private actions$: Actions, private catService: CatService) {}

  getAllCats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllCats),
      mergeMap(() =>
        this.catService
          .getAllCats()
          .pipe(map((cats) => getAllCatsSuccess({ cats })))
      )
    )
  );
}
