import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WildComponent } from './wild/wild.component';
import { LoginComponent } from '@ngrx-cars/ui-library';
import { CarsComponent } from './cars/cars.component';
import { CarsItemComponent } from './cars/cars-item/cars-item.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'wild', component: WildComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'cars/:id', component: CarsItemComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'wild', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
