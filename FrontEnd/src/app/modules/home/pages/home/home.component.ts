import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public resturants:any

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.resturantsList();
  }

  public resturantsList() {
    this.api.get('resturants').subscribe(res => {
      this.resturants = res.data;
      console.log('data response', this.resturants);
    });
  }

  public sortByPrice(sortVal: any) {
    this.api.get(`resturants/sort?sortVal=${sortVal}`).subscribe(res => {
      this.resturants = res.data;
      console.log('data response', this.resturants);
    });
  }

  public sortByRating(sortVal: any) {
    this.api.get(`resturants/sortbyRating?sortVal=${sortVal}`).subscribe(res => {
      this.resturants = res.data;
      console.log('data response', this.resturants);
    });
  }


  navigate(_link: any) {
    console.log(_link);
    
  }

}
