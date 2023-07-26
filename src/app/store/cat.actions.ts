import { createAction, props } from '@ngrx/store';
import { Cat } from '../interfaces/Cat';

export const getAllCats = createAction('[Cat] Get All Cats', props<{ cats: Cat[] }>());
