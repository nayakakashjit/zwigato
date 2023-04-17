import { Component } from '@angular/core';
import { catchError, finalize, of, tap } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { NgxNotifierService } from 'ngx-notifier';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public isLoading: boolean = false;
  public error: any;

  constructor(
    private apiService: ApiService,
    private ngxNotifierService: NgxNotifierService,
    private router:Router
  ) { };

  /** crates a toast message */
  createToast(message:string, style: string, duration: number): void {
    this.ngxNotifierService.createToast(message, style, duration);
  }

  public onClickSubmit(data:any) {
    if (data.email.trim() == "" || data.password.trim() == "") {
      this.createToast('please provide valid login credentials', 'warning', 5000);
      return
    }
    this.apiService.post('login', data)
    .pipe(
      tap(response =>{
        this.createToast(response.message, 'success', 5000)
        localStorage.setItem('token', response.token);
        this.router.navigateByUrl('/home')
        console.log(response);
        
      }),
      finalize(() => this.isLoading = false),
      catchError(error => of(this.error = error))
    ).subscribe();
 }

}
