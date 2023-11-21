import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StaffServiceService } from './screens/Admin/staff/staff-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
	selector: 'app-root',
	standalone: true,
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css', './styles/fonts.css'],
	imports: [CommonModule, RouterOutlet, SidebarComponent],
	providers: [StaffServiceService]
})
export class AppComponent implements OnInit {
	ngOnInit() { }
	constructor() { }
	title = 'emp_angular';
	sidebarMenus = ['Home', 'Staff', 'Products'];
}
