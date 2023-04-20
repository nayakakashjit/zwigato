import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
    private auth: AuthService,
    private cdr: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
    // Check after login
    this.auth.state.isLoggedin$.subscribe((res)=>{
      console.log('User Loggedin', res)
      if (res) {
        this.userLogged = res;
      }
    });
    // check if user refresh from url
    this.userLogged = !!localStorage.getItem('token');
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

  public logout() {
    window.localStorage.removeItem('token');
    this.auth.state.isLoggedin$.next(false);
    this.userLogged = false;
    this.cdr.detectChanges();
    this.router.navigateByUrl('/account/login')
  }

}
