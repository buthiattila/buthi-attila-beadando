import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsWidgetComponent } from './foods-widget.component';

describe('FoodsWidgetComponent', () => {
  let component: FoodsWidgetComponent;
  let fixture: ComponentFixture<FoodsWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodsWidgetComponent]
    });
    fixture = TestBed.createComponent(FoodsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
