import { Component, OnInit } from '@angular/core';
import { FoodItemService } from '../services/food-item.service';
import { FoodItem } from '../food-item.model';

@Component({
  selector: 'app-food-item-list',
  templateUrl: './food-item-list.component.html',
  styleUrls: ['./food-item-list.component.css']
})
export class FoodItemListComponent implements OnInit {
  foodItems: FoodItem[] = [];

  constructor(private foodItemService: FoodItemService) {}

  ngOnInit(): void {
    this.loadFoodItems();
  }

  loadFoodItems(): void {
    this.foodItemService.getFoodItems().subscribe(items => {
      console.log('Loaded food items:', items); // Debugging log
      this.foodItems = items;
    });
  }

  deleteFoodItem(id: string): void {  // Change the type to string
    console.log('Deleting food item with id:', id); // Debugging log
    this.foodItemService.deleteFoodItem(id).subscribe({
      next: () => {
        console.log('Food item deleted successfully'); // Debugging log
        this.loadFoodItems();
      },
      error: (err) => console.error('Failed to delete food item', err)
    });
  }

  getDaysUntilExpiration(expirationDate: Date): number {
    const now = new Date();
    const exp = new Date(expirationDate);
    const diffTime = exp.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24));
    return diffDays;
  }

  getStatus(expirationDate: Date): string {
    const days = this.getDaysUntilExpiration(expirationDate);
    if (days < 0) {
      return 'Expired';
    } else if (days === 0) {
      return 'Expires Today';
    } else if (days <= 3) {
      return 'Expires Soon';
    } else {
      return 'Fresh';
    }
  }
}
