import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodItemService } from '../services/food-item.service';
import { FoodItem } from '../food-item.model';

@Component({
  selector: 'app-food-item-detail',
  templateUrl: './food-item-detail.component.html',
  styleUrls: ['./food-item-detail.component.css']
})
export class FoodItemDetailComponent implements OnInit {
  foodItem: FoodItem | undefined;

  constructor(
    private route: ActivatedRoute,
    private foodItemService: FoodItemService
  ) {}

  ngOnInit(): void {
    this.getFoodItem();
  }

  getFoodItem(): void {
    const id = this.route.snapshot.paramMap.get('id'); // id will be a string - checked with ikram
    if (id) {
      this.foodItemService.getFoodItem(id).subscribe(item => {
        this.foodItem = item;
      });
    }
  }

  getDaysUntilExpiration(expirationDate: Date): number {
    const now = new Date();
    const exp = new Date(expirationDate);
    const diffTime = exp.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24));
    return diffDays;
  }

  getStatus(expirationDate: Date): string { //checked by Wajdi, Success
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

  getStatusClass(expirationDate: Date): string { //checked by Wajdi, Success
    const status = this.getStatus(expirationDate);
    if (status === 'Expired') {
      return 'text-danger';
    } else if (status === 'Expires Today' || status === 'Expires Soon') {
      return 'text-warning';
    } else {
      return 'text-success';
    }
  }
}
