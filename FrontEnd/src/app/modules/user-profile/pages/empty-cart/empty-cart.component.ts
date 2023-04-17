import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empty-cart',
  templateUrl: './empty-cart.component.html',
  styleUrls: ['./empty-cart.component.css']
})
export class EmptyCartComponent {

  constructor(private router:Router) { }

  goRegister(){
    this.router.navigate(['account/register']);
  }

  goLogin(){
    this.router.navigate(['account/login'])
  }


}
