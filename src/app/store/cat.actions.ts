import { createAction, props } from '@ngrx/store';
import { Cat } from '../interfaces/Cat';

export const getAllCats = createAction('[Cat Component] getAllCats');
export const getAllCatsSuccess = createAction(
  '[Cat] Get All Cats Success',
  props<{ cats: Cat[] }>()
);
