import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './car.model';

const BASE_URL = 'https://kenneth-server.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  model = 'cars';

  constructor(private httpClient: HttpClient) {}

  getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }

  findOne(car: Car) {
    return this.httpClient.get(this.getUrlForId(car));
  }

  create(car: Car) {
    return this.httpClient.post(this.getUrl(), car);
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  update(car: Car) {
    return this.httpClient.patch(this.getUrlForId(car.id), car);
  }

  delete(car: Car) {
    return this.httpClient.delete(this.getUrlForId(car.id));
  }
}
