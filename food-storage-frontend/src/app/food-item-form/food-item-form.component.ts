import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodItemService } from '../services/food-item.service';
import { FoodItem } from '../food-item.model';

@Component({
  selector: 'app-food-item-form',
  templateUrl: './food-item-form.component.html',
  styleUrls: ['./food-item-form.component.css']
})
export class FoodItemFormComponent implements OnInit {
  foodItem: FoodItem = { id: 0, name: '', quantity: 0, expirationDate: new Date() };
  isEditMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private foodItemService: FoodItemService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.foodItemService.getFoodItem(id).subscribe(item => {
        this.foodItem = item;
      });
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.foodItemService.updateFoodItem(this.foodItem.id.toString(), this.foodItem).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.foodItemService.addFoodItem(this.foodItem).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
