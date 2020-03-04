import { Component, OnInit } from '@angular/core';
import { CarsService } from '@ngrx-cars/core-data';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngrx-cars-cars-item',
  templateUrl: './cars-item.component.html',
  styleUrls: ['./cars-item.component.scss']
})
export class CarsItemComponent implements OnInit {
  _car$;

  public get car$() {
    return this._car$;
  }

  public set car$(value) {
    this._car$ = value;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private carsService: CarsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      const id = param['id'];
      this.car$ = this.carsService.findOne(id);
    });
  }

  goBackToCars() {
    this.router.navigate(['/cars']);
  }
}
