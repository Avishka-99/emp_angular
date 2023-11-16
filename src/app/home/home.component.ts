import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from '../table/table.component';

@Component({
	selector: 'app-home',
	standalone: true,
	templateUrl: './home.component.html',
	styleUrl: './home.component.css',
	imports: [CommonModule, TableComponent],
})
export class HomeComponent {
	parentData = ['Name', 'Age', 'Contact no','Role'];
}
