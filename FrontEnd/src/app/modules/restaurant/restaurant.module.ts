import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { RestaurantsMenuComponent } from './pages/restaurants-menu/restaurants-menu.component';


@NgModule({
  declarations: [
    RestaurantsComponent,
    RestaurantsMenuComponent
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule
  ]
})
export class RestaurantModule { }
