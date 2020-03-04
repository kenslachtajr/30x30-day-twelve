import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';

import { MaterialModule } from '@ngrx-cars/material';
import { CoreDataModule } from '@ngrx-cars/core-data';
import { UiLibraryModule } from '@ngrx-cars/ui-library';
import { CoreStateModule } from '@ngrx-cars/core-state';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CarsComponent } from './cars/cars.component';
import { CarsDetailsComponent } from './cars/cars-details/cars-details.component';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { CarsItemComponent } from './cars/cars-item/cars-item.component';
import { WildComponent } from './wild/wild.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreDataModule,
    CoreStateModule,
    UiLibraryModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  declarations: [
    AppComponent,
    CarsComponent,
    CarsDetailsComponent,
    CarsListComponent,
    CarsItemComponent,
    WildComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
