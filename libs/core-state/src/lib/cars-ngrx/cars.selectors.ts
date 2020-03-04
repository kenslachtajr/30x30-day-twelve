import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  CARS_FEATURE_KEY,
  carsAdapter,
  CarsPartialState,
  CarsState
} from './cars.reducer';

export const selectCarsState = createFeatureSelector<
  CarsPartialState,
  CarsState
>(CARS_FEATURE_KEY);

const { selectAll, selectEntities } = carsAdapter.getSelectors();

export const selectCarsLoading = createSelector(
  selectCarsState,
  (state: CarsState) => state.isLoading
);

export const selectAllCars = createSelector(
  selectCarsState,
  (state: CarsState) => selectAll(state)
);

export const selectCarsEntities = createSelector(
  selectCarsState,
  (state: CarsState) => selectEntities(state)
);

export const selectCarId = createSelector(
  selectCarsState,
  (state: CarsState) => state.selectedCarId
);

export const selectCar = createSelector(
  selectCarsEntities,
  selectCarId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
