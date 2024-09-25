import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgOptimizedImage, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    loginForm = new FormGroup({
        username: new FormControl(''),
        password: new FormControl(''),
    })
    errorMsg = '' ;

    login() {
        if (this.loginForm.value.username?.trim().length === 0) {
            this.errorMsg = "Username is required";
        }
        else if (this.loginForm.value.password?.trim().length === 0) {
            this.errorMsg = "Password is required";
        }
        else {
            this.errorMsg = '';
        }
    }
}
