import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {Food} from "../../core/types/food.type";
import {FoodService} from "../../core/services/food.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-foods-widget',
  templateUrl: './foods-widget.component.html',
  styleUrls: ['./foods-widget.component.scss']
})
export class FoodsWidgetComponent implements OnInit {

  loading: boolean = false;
  errorMessage: string = '';
  foods: Food[] = [];
  categories: string[] = ["pizza", "sajtos", "gombás", "gyümölcsös", "paradicsomos"];

  private unsubscribe = new Subject<void>();

  constructor(private foodService: FoodService, private router: Router) {
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

  openItem(itemId: number): void {
    localStorage.setItem('parentPage', 'home');

    this.router.navigate(['foods', itemId]);
  }

}
