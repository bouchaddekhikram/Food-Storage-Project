import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
    if (!this.username || !this.password) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Username and password are required!',
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }

    this.authService.register(this.username, this.password).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Registration Successful',
          text: 'Please login with your credentials',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.router.navigate(['/login']);
        });
      },
      error: (error) => {
        let errorMessage = 'An error occurred during registration. Please try again.';
        
        if (error.status === 409) {
          errorMessage = 'Username already exists. Please choose another.';
        }
        
        Swal.fire({
          icon: 'warning',
          title: 'Registration Failed',
          text: errorMessage,
          showConfirmButton: true
        });
        
        this.password = '';
      }
    });
  }
}
