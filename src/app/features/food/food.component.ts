import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BehaviorSubject, Subject, takeUntil} from 'rxjs';

import {AppUtilsService} from '../../core/services/app-utils.service';
import {FoodService} from "../../core/services/food.service";
import {Food} from "../../core/types/food.type";

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent {

  title = "";
  defaultClosePath: string = 'home';
  loading: boolean = false;
  errorMsg: string = '';
  id: number = -1;
  food: Food | undefined = undefined;
  imgCollection: Array<object> = [];

  private isFavorite = new BehaviorSubject<boolean>(false);
  isFavorite$ = this.isFavorite.asObservable();

  private unsubscribe = new Subject<void>();

  constructor(private router: Router, private appUtils: AppUtilsService, private actRoute: ActivatedRoute, private foodService: FoodService) {
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
    this.id = this.actRoute.snapshot.params['id'];

    this.foodService.foods$.pipe(takeUntil(this.unsubscribe)).subscribe((foods: Food[] | null) => {
      const food = this.foodService.getSingleFoodById(this.id);

      if (food === null) {
        this.foodService.getAllFoods()
      } else if (food === undefined) {
        this.loading = false;
        this.errorMsg = 'A recept nem létezik'
      } else {
        if (this.food === undefined) {
          this.loading = false;
          this.food = food;

          for (let key in food.sliderImages) {
            let stringJson: string = JSON.stringify(food.sliderImages[key]);
            let stringObject = JSON.parse(stringJson);

            this.imgCollection.push(stringObject);
          }
        }
      }
    });
  }

  closeFood(): void {
    this.loading = false;

    const isPreviousPageInApp: boolean = this.appUtils.isCurrentPathInApp();
    let path: string | null = localStorage.getItem('parentPage');

    if (isPreviousPageInApp) {
      if (path === null) {
        path = this.defaultClosePath;
      }
    } else {
      path = this.defaultClosePath;
    }

    this.router.navigate([path]);
  }

}
