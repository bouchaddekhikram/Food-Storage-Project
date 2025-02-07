import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FoodItemListComponent } from './food-item-list/food-item-list.component';
import { FoodItemDetailComponent } from './food-item-detail/food-item-detail.component';
import { FoodItemFormComponent } from './food-item-form/food-item-form.component';
import { AuthGuard } from './auth.guard'; 


const routes: Routes = [
  { path: '', component: FoodItemListComponent , canActivate: [AuthGuard] },
  { path: 'food-item/:id', component: FoodItemDetailComponent, canActivate: [AuthGuard]},
  { path: 'add-food-item', component: FoodItemFormComponent,canActivate: [AuthGuard] },
  { path: 'edit-food-item/:id', component: FoodItemFormComponent,canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }