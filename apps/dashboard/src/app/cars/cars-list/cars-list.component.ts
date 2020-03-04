import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '@ngrx-cars/core-data';

@Component({
  selector: 'ngrx-cars-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent {
  @Input() cars: Car[]
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
