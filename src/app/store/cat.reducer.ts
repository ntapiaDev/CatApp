import { createReducer, on } from '@ngrx/store';
import { addCat, deleteCat, editCat, getAllCats } from './cat.actions';
import { Cat } from '../interfaces/Cat';

export const initialState: Cat[] = [];

export const catReducer = createReducer(
  initialState,
  on(getAllCats, (state, { cats }) => cats),
  on(addCat, (state, { cat }) => [...state, cat]),
  on(deleteCat, (state, { id }) => state.filter((cat) => cat._id !== id)),
  on(editCat, (state, { cat }) =>
    state.map((existingCat) =>
      existingCat._id === cat._id ? cat : existingCat
    )
  )
);
