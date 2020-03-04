import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Car, NotifyService, emptyCar } from '@ngrx-cars/core-data';
import { CarsFacade } from '@ngrx-cars/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngrx-cars-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  form: FormGroup;
  selectedCar: Car;
  cars$: Observable<Car[]> = this.carsFacade.allCars$;

  constructor(
    private carsFacade: CarsFacade,
    private formBuilder: FormBuilder,
    private notify: NotifyService
  ) {}

  ngOnInit() {
    this.initForm();
    this.carsFacade.loadCars();
    this.carsFacade.mutations$.subscribe(() => this.resetCar());
  }

  resetCar() {
    this.form.reset();
    this.selectCar(emptyCar);
    Object.keys(this.form.controls).forEach(key => {
      this.form.get(key).setErrors(null);
    });
  }

  selectCar(car: Car) {
    this.carsFacade.selectCar(car.id);
    this.form.patchValue(car);
  }

  createCar() {
    this.notify.notification(`You have created ${this.form.value.model}`);
    this.carsFacade.createCar(this.form.value);
  }

  updateCar() {
    this.notify.notification(`You have updated ${this.form.value.title}`);
    this.carsFacade.updateCar(this.form.value);
  }

  saveCar(car: Car) {
    if (car.id) {
      this.updateCar();
    } else {
      this.createCar();
    }
  }

  deleteCar(car: Car) {
    this.notify.notification(`You have deleted ${car.make} ${car.model}`);
    this.carsFacade.deleteCar(car);
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      make: ['', Validators.compose([Validators.required])],
      model: ['', Validators.compose([Validators.required])],
      maxSpeed: ['']
    });
  }
}
