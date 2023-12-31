import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import axios from 'axios';
@Injectable()
export class AuthService {
    private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    get isLoggedIn() {
        this.loggedIn.next(true);
        return this.loggedIn.asObservable();
    }

    constructor(
        private router: Router
    ) { }

    login(user: User) {
        
        //console.log(user)
        if (user.userName !== '' && user.password !== '' ) {
          this.loggedIn.next(true);
          this.router.navigate(['/products']);
        }
    }

    logout() {
        this.loggedIn.next(false);
        this.router.navigate(['']);
    }
}