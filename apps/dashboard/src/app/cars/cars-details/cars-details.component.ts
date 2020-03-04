import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '@ngrx-cars/core-data';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ngrx-cars-cars-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.css']
})
export class CarsDetailsComponent {
  currentCar: Car;
  originalTitle;

  @Input() set car(value) {
    if (value) this.originalTitle = value.title;
    this.currentCar = Object.assign({}, value);
  }
  @Input() form: FormGroup;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}
