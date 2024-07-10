import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FoodItem } from '../food-item.model';

@Injectable({
  providedIn: 'root'
})
export class FoodItemService {
  private apiUrl = 'http://localhost:3000/food-items';

  constructor(private http: HttpClient) {}

  getFoodItems(): Observable<FoodItem[]> {
    return this.http.get<FoodItem[]>(this.apiUrl);
  }

  getFoodItem(id: string): Observable<FoodItem> {  // Expecting string id
    return this.http.get<FoodItem>(`${this.apiUrl}/${id}`);
  }

  addFoodItem(foodItem: Omit<FoodItem, 'id'>): Observable<FoodItem> {
    return this.http.post<FoodItem>(this.apiUrl, foodItem);
  }

  updateFoodItem(id: string, foodItem: Omit<FoodItem, 'id'>): Observable<FoodItem> {  // Expecting string id
    return this.http.put<FoodItem>(`${this.apiUrl}/${id}`, foodItem);
  }

  deleteFoodItem(id: string): Observable<void> {  // Expecting string id
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
