import { createAction, props } from '@ngrx/store';
import { Cat } from '../interfaces/Cat';

export const getAllCats = createAction('[Cat] Get All Cats', props<{ cats: Cat[] }>());
export const addCat = createAction('[Cat] Add A Cat', props<{ cat: Cat }>());
export const deleteCat = createAction('[Cat] Delete A Cat', props<{ id: string }>());
export const editCat = createAction('[Cat] Edit A Cat', props<{ cat: Cat }>());
