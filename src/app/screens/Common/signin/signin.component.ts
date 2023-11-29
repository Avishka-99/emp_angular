import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service';
import axios from 'axios';
@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }
  login(name: HTMLInputElement, password: HTMLInputElement) {
    axios.post('https://localhost:7185/api/users', {
      name: name.value,
      password: password.value
    }).then((response) => {
      //console.log(response.data[0].user_id)
      localStorage.setItem('token', response.data[0].user_id);
      this.authService.login({ 'userName': name.value, 'password': response.data[0].user_id })
    })
    //localStorage.setItem('token', Math.random().toString());
    //this.authService.login({'userName':name.value,'password':password.value})
  }
  toSignUp() {
    this.router.navigate(['register'])
  }

}
