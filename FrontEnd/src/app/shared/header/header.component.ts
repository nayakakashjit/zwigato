import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 public cartTotal: number = 0
 public userLogged: Boolean = false;

  constructor(
    private router:Router, 
    private auth: AuthService
    ) { }

  ngOnInit(): void {
    this.auth.state.isLoggedin$.subscribe((res)=>{
      if (res) {
        this.userLogged = this.auth.isLoggedin();
        // console.log('User Loggedin', res)
      }
    })
    // this.userLogged = this.auth.isLoggedin();
    // console.log('this.userLogged', this.userLogged);
  }


  public myProfile() {
    if (!this.userLogged ){
      this.router.navigateByUrl('/account/login')
    } else {
      this.router.navigateByUrl('/profile/profile')
    }
    
  }

  public myOrders() {
    if (!this.userLogged ){
      this.router.navigateByUrl('/account/login')
    } else {
      this.router.navigateByUrl('/profile/orders')
    }
   
  }

  public myCart() {
    if (!this.userLogged) {
      this.router.navigateByUrl('/profile/empty-cart')
    } else {
      this.router.navigateByUrl('/profile/cart')
    }
  }

}
