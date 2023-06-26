import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

import {Food, FoodsResponse} from "../types/food.type";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private mockPath: string = './assets/foods.json';

  private foods = new BehaviorSubject<Food[] | null>(null);
  foods$ = this.foods.asObservable();

  constructor(private httpService: HttpService) {
    this.getAllFoods();
  }

  getAllFoods(): void {
    this.httpService.getLocalFile(this.mockPath).subscribe((response: FoodsResponse) => {
      this.foods.next(response.foods);
    });
  }

  getSingleFoodById(id: number): Food | null | undefined {
    if (this.foods.value !== null) {
      return this.foods.value.find((food) => food.id == id);
    } else {
      return this.foods.value;
    }
  }

}
