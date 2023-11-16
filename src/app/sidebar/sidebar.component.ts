import {Component, OnInit, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';

@Component({
	selector: 'app-sidebar',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
	@Input() menus: any;
	ngOnInit() {}
	constructor(private router: Router) {}
	navigateTo(path:any) {
		if(path=='Home'){
			//const url = path.toLowerCase()
			//console.log(url)
			this.router.navigate(['']);
		}else{
			const url = path.toLowerCase();
			console.log(url);
			this.router.navigate([url]);
		}
		//console.log(path);
		//this.router.navigate(['/staff']);
	}
}
