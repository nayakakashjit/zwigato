import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { RestaurantsMenuComponent } from './pages/restaurants-menu/restaurants-menu.component';

const routes: Routes = [
  {
    path: '',
    component: RestaurantsComponent
  },
  {
    path: 'restaurants',
    component: RestaurantsComponent
  },
  {
    path: 'restaurant-menu',
    component: RestaurantsMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
