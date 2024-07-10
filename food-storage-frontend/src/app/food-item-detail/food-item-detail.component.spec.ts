import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodItemDetailComponent } from './food-item-detail.component';

describe('FoodItemDetailComponent', () => {
  let component: FoodItemDetailComponent;
  let fixture: ComponentFixture<FoodItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodItemDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
