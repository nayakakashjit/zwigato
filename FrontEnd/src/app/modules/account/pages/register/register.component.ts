import { Component } from '@angular/core';
import { catchError, finalize, of, tap } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { NgxNotifierService } from 'ngx-notifier';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public isLoading: boolean = false;
  public error: any;

  constructor(
    private apiService: ApiService,
    private ngxNotifierService: NgxNotifierService
  ) { };

    /** crates a toast message */
    createToast(message:string, style: string, duration: number): void {
      this.ngxNotifierService.createToast(message, style, duration);
    }
  

  public onClickSubmit(data:any) {
    console.log(data);
     this.apiService.post('user', data)
     .pipe(
      tap(response =>{
        console.log(response);
        this.createToast(response.message, 'success', 5000)
      }),
      finalize(() => this.isLoading = false),
      catchError(error => of(this.error = error))
    ).subscribe();
 }

}
