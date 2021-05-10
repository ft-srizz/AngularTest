import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';
import { Dish } from '../shared/dish';




@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

    dish: Dish;
    dishIds: string[];
    prev: string;
    next: string;

  constructor(private dishServie: DishService,
    private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.dishServie.getDish(id)
      .subscribe(dish => this.dish = dish);
  }

  goBack(): void {
    this.location.back();
  }

  

}
