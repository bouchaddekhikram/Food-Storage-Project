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
      // Optionally, you can handle validation errors or display messages here
      console.error('Username and password are required.');
      return;
    }

    // Call AuthService to register the user
    this.authService.register(this.username, this.password).subscribe(
      () => {
        // On successful registration, navigate to login page or home page
        this.router.navigate(['/login']);
      },
      error => {
        // Handle registration failure (e.g., display error message to user)
        console.error('Registration failed', error);
        // Optionally, you can reset the form fields here
        this.username = '';
        this.password = '';
      }
    );
  }
}
