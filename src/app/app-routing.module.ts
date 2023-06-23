import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {environment} from "../environments/environment";

import {HomeComponent} from "./features/home/home.component";
import {FoodsComponent} from "./features/foods/foods.component";
import {FoodComponent} from "./features/food/food.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {label: 'Főoldal'}},
  {path: 'foods', component: FoodsComponent, data: {label: 'Összes étel'}},
  {path: 'foods/:id', component: FoodComponent, data: {label: 'Étel'}},
  {path: '', redirectTo: environment.config.homePageRoute, pathMatch: 'full'},
  {path: '**', redirectTo: environment.config.homePageRoute}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
