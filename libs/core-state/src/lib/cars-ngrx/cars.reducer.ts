import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as carsActions from './cars.actions';
import { Car } from '@ngrx-cars/core-data';

export const CARS_FEATURE_KEY = 'cars';

export interface CarsState extends EntityState<Car> {
  selectedCarId?: string | number;
  isLoading: boolean;
}

export interface CarsPartialState {
  readonly [CARS_FEATURE_KEY]: CarsState;
}

export const carsAdapter: EntityAdapter<Car> = createEntityAdapter<Car>();

export const initialState: CarsState = carsAdapter.getInitialState({
  selectedCarId: null,
  isLoading: false
});

const carsReducer = createReducer(
  initialState,
  on(carsActions.carSelected, (state, { selectedCarId }) =>
    Object.assign({}, state, { selectedCarId })
  ),
  on(carsActions.carsLoaded, (state, { cars }) =>
    carsAdapter.addAll(cars, { ...state, isLoading: false })
  ),
  on(carsActions.carUpdated, (state, { car }) =>
    carsAdapter.upsertOne(car, { ...state, isLoading: false })
  ),
  on(carsActions.carDeleted, (state, { car }) =>
    carsAdapter.removeOne(car.id, { ...state, isLoading: false })
  ),
  on(
    carsActions.loadCars,
    carsActions.createCar,
    carsActions.updateCar,
    carsActions.deleteCar,
    state => ({
      ...state,
      isLoading: true
    })
  )
);

export function reducer(state: CarsState | undefined, action: Action) {
  return carsReducer(state, action);
}
