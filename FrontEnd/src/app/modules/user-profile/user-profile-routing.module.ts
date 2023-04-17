import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { EmptyCartComponent } from './pages/empty-cart/empty-cart.component';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { AuthGuard } from 'src/app/auth/auth.guard';

const routes: Routes = [
  {
    path: 'empty-cart',
    component: EmptyCartComponent
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'orders',
    component: MyOrdersComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'profile',
    component: MyProfileComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
