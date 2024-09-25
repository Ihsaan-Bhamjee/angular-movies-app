import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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

    constructor(private auth: AuthService, private router: Router) {}

    login() {
        if (this.loginForm.value.username?.trim().length === 0) {
            this.errorMsg = "Username is required";
        }
        else if (this.loginForm.value.password?.trim().length === 0) {
            this.errorMsg = "Password is required";
        }
        else {
            this.errorMsg = '';
            let res = this.auth.login(this.loginForm.value.username ?? "default", this.loginForm.value.password ?? "default");
            if (res === 200) {
                this.router.navigate(['home']);
            }
            if (res === 403) {
                this.errorMsg = "Invalid credentials!";
            }
        }
    }
}
