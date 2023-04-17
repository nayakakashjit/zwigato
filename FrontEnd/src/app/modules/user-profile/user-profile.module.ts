import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { CartComponent } from './pages/cart/cart.component';
import { EmptyCartComponent } from './pages/empty-cart/empty-cart.component';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';


@NgModule({
  declarations: [
    MyProfileComponent,
    CartComponent,
    EmptyCartComponent,
    MyOrdersComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule
  ]
})
export class UserProfileModule { }
