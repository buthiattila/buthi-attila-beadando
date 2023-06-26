import {Component} from '@angular/core';
import {Subject} from "rxjs";

import {StorageService} from "../../core/services/storage.service";
import {FoodService} from "../../core/services/food.service";
import {Food} from "../../core/types/food.type";

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})
export class FoodsComponent {

  loading: boolean = false;
  onlyFavorites: boolean = false;
  foods: Food[] = [];
  filteredFoods: Food[] = [];

  private unsubscribe = new Subject<void>();

  constructor(private foodService: FoodService, private storageService: StorageService) {
  }

  ngOnInit(): void {
    this.init();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private init(): void {
    this.loading = true;

    this.foodService.foods$.subscribe({
      next: (response: Food[] | null) => {
        if (response !== null) {
          this.foods = response;
          this.filteredFoods = response;
        }

        this.loading = false;
      }
    });
  }

  applyFilter(event: Event): void {
    const filterValue: string = (event.target as HTMLInputElement).value.trim().toLowerCase();

    this.filteredFoods = this.foods.filter((item) => {
      let found: boolean = item.category.toLowerCase().includes(filterValue) || item.name.toLowerCase().includes(filterValue);

      if (this.onlyFavorites) {
        found = this.storageService.check('favorite', item.id);
      }

      return found;
    });
  }

}
