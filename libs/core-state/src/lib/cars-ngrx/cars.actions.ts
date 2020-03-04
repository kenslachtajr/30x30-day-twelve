import { createAction, props } from '@ngrx/store';
import { Car } from '@ngrx-cars/core-data';

export const carSelected = createAction(
  '[CAR] Car Selected',
  props<{ selectedCarId: string | number }>()
);

export const loadCars = createAction('[CAR] Load Cars');

export const carsLoaded = createAction(
  '[CAR] Cars Loaded',
  props<{ cars: Car[] }>()
);

export const loadCar = createAction(
  '[CAR] Load Car',
  props<{ carId: string | number }>()
);

export const carLoaded = createAction(
  '[CAR] Car Loaded',
  props<{ car: Car }>()
);

export const createCar = createAction(
  '[CAR] Create Car',
  props<{ car: Car }>()
);

export const carCreated = createAction(
  '[CAR] Car Created',
  props<{ car: Car }>()
);

export const updateCar = createAction(
  '[CAR] Update Car',
  props<{ car: Car }>()
);

export const carUpdated = createAction(
  '[CAR] Car Updated',
  props<{ car: Car }>()
);

export const deleteCar = createAction(
  '[CAR] Delete Car',
  props<{ car: Car }>()
);

export const carDeleted = createAction(
  '[CAR] Car Deleted',
  props<{ car: Car }>()
);
