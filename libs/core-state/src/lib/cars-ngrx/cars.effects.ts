import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';

import * as carsActions from './cars.actions';
import { Car, CarsService, NotifyService } from '@ngrx-cars/core-data';
import { CarsPartialState } from './cars.reducer';

@Injectable()
export class CarsEffect {
  loadCars$ = createEffect(() =>
    this.dataPersistence.fetch(carsActions.loadCars, {
      run: (
        action: ReturnType<typeof carsActions.loadCars>,
        state: CarsPartialState
      ) => {
        return this.carsService.all().pipe(
          map((cars: Car[]) => carsActions.carsLoaded({ cars }))
        );
      },
      onError: (action: ReturnType<typeof carsActions.loadCars>, error) => {
        this.notify.notification('Effect Error:', error);
      }
    })
  );

  // loadCar$ = createEffect(() =>
  //   this.dataPersistence.fetch(carsActions.loadCar, {
  //     run: (
  //       action: ReturnType<typeof carsActions.loadCar>,
  //       state: CarsPartialState
  //     ) => {
  //       return this.carsService.findOne(action.carId).pipe(
  //         map((car: Car) => carsActions.carLoaded({ car }))
  //       );
  //     },
  //     onError: (action: ReturnType<typeof carsActions.loadCar>, error) => {
  //       this.notify.notification('Effect Error:', error);
  //     }
  //   })
  // );

  // selectCarOnLoad$ = createEffect(() =>
  //   this.dataPersistence.actions.pipe(
  //     ofType(carsActions.carLoaded),
  //     map(({ car }) => carsActions.carSelected({ selectedCarId: car.id }))
  //   ))

  createCar$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(carsActions.createCar, {
      run: (
        action: ReturnType<typeof carsActions.createCar>,
        state: CarsPartialState
      ) => {
        return this.carsService.create(action.car).pipe(
          map((car: Car) => carsActions.carCreated({ car })),
        );
      },
      onError: (action: ReturnType<typeof carsActions.createCar>, error) => {
        this.notify.notification('Effect Error:', error);
      }
    }))

  updateCar$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(carsActions.updateCar, {
      run: (
        action: ReturnType<typeof carsActions.updateCar>,
        state: CarsPartialState
      ) => {
        return this.carsService.update(action.car).pipe(
          map((car: Car) => carsActions.carUpdated({ car })),
          tap(() => this.carsService.all())

        );
      },
      onError: (action: ReturnType<typeof carsActions.updateCar>, error) => {
        this.notify.notification('Effect Error:', error);
      }
    })
  );

  deleteCar$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(carsActions.deleteCar, {
      run: (
        action: ReturnType<typeof carsActions.deleteCar>,
        state: CarsPartialState
      ) => {
        return this.carsService.delete(action.car).pipe(
          map(() => carsActions.carDeleted({ car: action.car }))
        );
      },
      onError: (action: ReturnType<typeof carsActions.deleteCar>, error) => {
        this.notify.notification('Effect delete Error: ', error);
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<CarsPartialState>,
    private carsService: CarsService,
    private notify: NotifyService
  ) { }
}
