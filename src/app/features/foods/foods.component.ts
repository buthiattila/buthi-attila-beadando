import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";

import {StorageService} from "../../core/services/storage.service";
import {FoodService} from "../../core/services/food.service";
import {Food} from "../../core/types/food.type";
import {Router} from "@angular/router";

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})
export class FoodsComponent implements OnInit {

  loading: boolean = false;
  onlyFavorites: boolean = false;
  filterString: string = '';
  errorMessage: string = '';
  breakpoint: number = 0;
  foods: Food[] = [];
  filteredFoods: Food[] = [];

  private unsubscribe = new Subject<void>();

  constructor(private foodService: FoodService, private storageService: StorageService, private router: Router) {
  }

  ngOnInit(): void {
    this.init();
    this.calcBreakPoint(window);
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

          this.errorMessage = (!this.foods.length ? 'Nincs feltöltött recept' : '');
        } else {
          this.errorMessage = 'Nincs feltöltött recept';
        }

        setTimeout(() => {
          this.loading = false;
        }, 500);
      }
    });
  }

  changeFilter(event: Event): void {
    this.filterString = (event.target as HTMLInputElement).value.trim().toLowerCase();

    this.applyFilter();
  }

  applyFilter(): void {
    this.filteredFoods = this.foods.filter((item) => {
      let found: boolean = item.category.some(elem => elem.toLowerCase().includes(this.filterString)) || item.name.toLowerCase().includes(this.filterString);

      if (found && this.onlyFavorites) {
        found = this.storageService.check('favorite', item.id);
      }

      return found;
    });

    this.errorMessage = (!this.filteredFoods.length ? 'Nincs a szűrésnek megfelelő recept' : '');
  }

  changeFavorites(): void {
    this.applyFilter();
  }

  onResize(event: any): void {
    if (event.target !== null) {
      this.calcBreakPoint(event.target);
    }
  }

  calcBreakPoint(target: any): void {
    if (target.innerWidth <= 576) {
      this.breakpoint = 1;
    } else if (target.innerWidth <= 768) {
      this.breakpoint = 2;
    } else if (target.innerWidth <= 992) {
      this.breakpoint = 2;
    } else if (target.innerWidth <= 1200) {
      this.breakpoint = 3;
    } else if (target.innerWidth <= 1400) {
      this.breakpoint = 3;
    }
  }

  openItem(itemId: number): void {
    localStorage.setItem('parentPage', 'foods');

    this.router.navigate(['foods', itemId]);
  }

}
