import {Component, OnInit, Input} from '@angular/core';
import { Observable } from 'rxjs';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';
import { AuthService } from '../../auth.service';
@Component({
	selector: 'app-sidebar',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
	isLoggedIn$: Observable<boolean> | undefined;
	@Input() menus: any;
	
	ngOnInit() {
		this.isLoggedIn$ = this.authService.isLoggedIn;
	}
	constructor(private router: Router,private authService:AuthService) {}
	navigateTo(path:any) {
		if(path=='Home'){
			//const url = path.toLowerCase()
			//console.log(url)
			this.router.navigate(['']);
		}else if(path=='Logout'){
			localStorage.removeItem('token')
			this.authService.logout()
			//this.router.navigate([''])
		}else{
			const url = path.toLowerCase();
			console.log(url);
			this.router.navigate([url]);
		}
		//console.log(path);
		//this.router.navigate(['/staff']);
	}
	
}
