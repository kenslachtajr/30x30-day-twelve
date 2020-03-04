import { ActionReducerMap } from '@ngrx/store';
import * as fromCars from './cars-ngrx/cars.reducer';

export interface AppState {
  cars: fromCars.CarsState;
}

export const reducers: ActionReducerMap<AppState> = {
  cars: fromCars.reducer
};

export const defaultState: AppState = {
  cars: { ids: [] } as fromCars.CarsState
};
