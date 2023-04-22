import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-restaurants-menu',
  templateUrl: './restaurants-menu.component.html',
  styleUrls: ['./restaurants-menu.component.css']
})
export class RestaurantsMenuComponent implements OnInit {

 public menus: any;
 public errorMsg: any = false;
 public restaurantName: '' | undefined;

constructor(
  private route: ActivatedRoute,
  private api: ApiService
  ){};

public ngOnInit(): void {
  this.UrlValue();
}

  public UrlValue() {
    this.route.queryParams.subscribe((params: { restaurantId?: any, restaurantName?:any }) => {
      if (Object.keys(params).length !== 0) {
        const restaurantId: number = parseInt(params.restaurantId, 10);
        this.restaurantName = params.restaurantName;
        console.log('restaurantId', restaurantId);
        this.menuLists(restaurantId)
      }
    });
  }

  public menuLists(restaurantId:number) {
    this.api.get(`restaurantsMenu?restaurantId=${restaurantId}`).subscribe(
      (res)=>{
        console.log(res);
        this.menus = res.data
      },
      (err)=>{
        console.log(err);
        this.errorMsg = true;
      }
    )
  }
}
