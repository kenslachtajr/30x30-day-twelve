import { Injectable } from '@angular/core';
import { Action, select, Store, ActionsSubject } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import * as fromCars from './cars.reducer';
import * as carsActions from './cars.actions';
import * as carsSelectors from './cars.selectors';
import { Car } from '@ngrx-cars/core-data';

@Injectable({
  providedIn: 'root'
})
export class CarsFacade {
  allCars$ = this.store.pipe(select(carsSelectors.selectAllCars));
  selectedCar$ = this.store.pipe(select(carsSelectors.selectCar));
  carLoading$ = this.store.pipe(select(carsSelectors.selectCarsLoading));
  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type === carsActions.createCar({} as any).type ||
        action.type === carsActions.updateCar({} as any).type ||
        action.type === carsActions.deleteCar({} as any).type
    )
  );

  constructor(
    private actions$: ActionsSubject,
    private store: Store<fromCars.CarsPartialState>
  ) {}

  selectCar(selectedCarId: string | number) {
    this.dispatch(carsActions.carSelected({ selectedCarId }));
  }

  loadCars() {
    this.dispatch(carsActions.loadCars());
  }

  loadCar(carId: string | number) {
    this.dispatch(carsActions.loadCar({ carId }));
  }

  createCar(car: Car) {
    this.dispatch(carsActions.createCar({ car }));
  }

  updateCar(car: Car) {
    this.dispatch(carsActions.updateCar({ car }));
  }

  deleteCar(car: Car) {
    this.dispatch(carsActions.deleteCar({ car }));
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
