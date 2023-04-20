import { Component } from '@angular/core';
import { catchError, finalize, of, tap } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { NgxNotifierService } from 'ngx-notifier';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public isLoading: boolean = false;
  public error: any;
  public passwordtype: string = 'password';
  public showHideIcon: string = 'fa fa-eye-slash'

  constructor(
    private apiService: ApiService,
    private ngxNotifierService: NgxNotifierService,
    private router:Router,
    private auth: AuthService,
  ) { };

  /** crates a toast message */
  createToast(message:string, style: string, duration: number): void {
    this.ngxNotifierService.createToast(message, style, duration);
  }

  public showPassword() {
    this.passwordtype = 'text';
    this.showHideIcon = 'fa fa-eye'
    setTimeout(() => {
      this.passwordtype = 'password';
      this.showHideIcon = 'fa fa-eye-slash'
    }, 1000);
  }

  public onClickSubmit(data:any) {
    if (data.email.trim() == "" || data.password.trim() == "") {
      this.createToast('please provide valid login credentials', 'warning', 5000);
      return
    }
    this.apiService.post('login', data)
    .pipe(
      tap(response =>{
        if (response.auth) {
          this.createToast(response.message, 'success', 5000)
          localStorage.setItem('token', response.token);
          this.auth.state.isLoggedin$.next(true);
          this.router.navigateByUrl('/home')
        }
        console.log(response);
        this.createToast(response.message, 'info', 5000)
      }),
      finalize(() => this.isLoading = false),
      catchError(error => {
        console.log(error);
        return this.error = error;
      })
    ).subscribe();
 }

}
