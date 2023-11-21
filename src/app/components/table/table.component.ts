import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-table',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './table.component.html',
	styleUrl: './table.component.css',
})
export class TableComponent {
	@Input() tableHeadings: any;
	@Input() tableData: any;
	@Input() type: any;
	@Input() customFunction!: (id: any) => void;
	constructor() { }
	ngOnInit() {
		//console.log((Object.keys(this.tableData[0])).length)
	}
	del(id: string): void {
		this.customFunction(id)
	}
}
