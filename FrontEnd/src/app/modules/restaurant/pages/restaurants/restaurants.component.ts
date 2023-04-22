import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  public resturants:any

  constructor(
    private api: ApiService,
    private router:Router,
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
    this.router.navigate(['/restaurant/restaurant-menu'],{
      queryParams: {
        restaurantId: _link.restaurant_id,
        restaurantName: _link.restaurant_name
      }
    })
  }

}
