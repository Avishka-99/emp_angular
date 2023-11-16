import {Component, OnInit, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
	selector: 'app-table',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './table.component.html',
	styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {
	@Input() tableHeadings: any;
	constructor() {}
	ngOnInit() {}
}
