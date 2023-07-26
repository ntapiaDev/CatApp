import { createReducer, on } from '@ngrx/store';
import { getAllCats, getAllCatsSuccess } from './cat.actions';
import { Cat } from '../interfaces/Cat';

export const initialState: Cat[] = [];

export const catReducer = createReducer(
  initialState,
  on(getAllCats, (state) => state),
  on(getAllCatsSuccess, (state, { cats }) => cats)
);
