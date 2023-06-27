import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-foods-widget',
  templateUrl: './foods-widget.component.html',
  styleUrls: ['./foods-widget.component.scss']
})
export class FoodsWidgetComponent implements OnInit {

  title = "";
  loading: boolean = false;
  categoryWithFoods: [] = [];
  private unsubscribe = new Subject<void>();

  ngOnInit(): void {
    this.init();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private init(): void {
    this.loading = true;
  }

}
