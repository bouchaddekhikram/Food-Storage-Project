import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    // Check if the form is valid
    if (!this.username || !this.password) {
      console.error('Username and password are required.');
      return;
    }

    // Call AuthService to register the user
    this.authService.register(this.username, this.password).subscribe(
      () => {
        this.router.navigate(['/login']);
      },
      error => {
        // Handle registration failure 
        console.error('Registration failed', error);
        this.username = '';
        this.password = '';
      }
    );
  }
}
