import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service';
import axios from 'axios';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }
  toSignIn() {
    this.router.navigate([''])
  }
  checkPasswordStrength = (password: string) => {
    var strength = 0;
    if (password.match(/[a-z]+/)) {
      strength += 1;
    }
    if (password.match(/[A-Z]+/)) {
      strength += 1;
    }
    if (password.match(/[0-9]+/)) {
      strength += 1;
    }
    if (password.match(/[$@#&!]+/)) {
      strength += 1;
    }
    if (password.length < 6 && strength < 4) {
      alert('Password should be atleast 6 characters long');
      alert('Password should contain atleast one lowercase and uppercase letter, a digit , a special character');
      return false;
    } else if (password.length < 6) {
      alert('Password should be atleast 6 characters long');
      return false;
    } else if (strength < 4) {
      alert('Password should contain atleast one lowercase and uppercase letter, a digit , a special character');
      return false;
    } else {
      return true;
    }
  };
  checkMail = (email: string) => {
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (email.match(mailformat)) {
      return true;
    } else {
      return false;
    }
  };
  toSignUp(name: HTMLInputElement, email: HTMLInputElement, password: HTMLInputElement, confirmpwd: HTMLInputElement) {
    const uname = name.value;
    const uemail = email.value;
    const upswd = password.value;
    const ucpswd = confirmpwd.value;

    var isClean = true;
    if (uname == '' || uemail == '') {
      isClean = false;
      alert('Please fill required fields');
    }
    if (uname.length > 0 && uemail.length > 0) {
      if (upswd == '' && ucpswd == '') {
        isClean = false;
        alert('Please enter password');
      }
      if (upswd != ucpswd) {
        isClean = false;
        alert('Please check password');
      }
      if (!this.checkMail(uemail)) {
        alert('Please enter valid email');
      }
      const passwordStrength = this.checkPasswordStrength(upswd);
      if (!passwordStrength) {
        isClean = false;
      }

    }
    if (isClean) {
      axios.post('https://localhost:7185/api/users/register', {
        name: uname,
        email: uemail,
        password: upswd
      }).then((response) => {
        if (response.status == 200) {
          this.router.navigate([''])
        }
      })
    }

    // if(uname =='' && uemail=='' && upswd=='' && ucpswd==''){
    //   alert('Please Fill required fields')
    // }else{
    //   axios.post('https://localhost:7185/api/users/register', {
    //     name: uname,
    //     email: uemail,
    //     password: upswd
    //   }).then((response) => {
    //     if (response.status == 200) {
    //       this.router.navigate([''])
    //     }
    //   })
    // }


  }
}
