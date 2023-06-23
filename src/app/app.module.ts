import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgImageSliderModule} from 'ng-image-slider';

import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from './utils/material.module';
import {PipesModule} from "./core/pipes/pipes.module";
import {AppComponent} from './app.component';
import {HomeComponent} from './features/home/home.component';
import {NavbarTopComponent} from './features/navbar-top/navbar-top.component';
import {FooterComponent} from './features/footer/footer.component';
import {FoodsComponent} from './features/foods/foods.component';
import {FoodComponent} from './features/food/food.component';
import {FoodsWidgetComponent} from './features/foods-widget/foods-widget.component';
import {ProgressSpinnerComponent} from "./shared/progress-spinner/progress-spinner.component";
import {BtnFavoriteComponent} from './shared/btn-favorite/btn-favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarTopComponent,
    FooterComponent,
    FoodsComponent,
    FoodComponent,
    FoodsWidgetComponent,
    ProgressSpinnerComponent,
    BtnFavoriteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgImageSliderModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
