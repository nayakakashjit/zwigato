import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public resturants:any

  constructor(
    // private api: ApiService,
    private router:Router
  ) { }

  ngOnInit() {
    // this.resturantsList();
  }

  navigate() {
    this.router.navigateByUrl('/restaurant')
  }
}
