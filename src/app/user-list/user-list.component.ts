import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import { UserItemComponent } from "../user-item/user-item.component";

@Component({
    selector: 'app-user-list',
    standalone: true,
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.css',
    imports: [CommonModule, UserItemComponent]
})
export class UserListComponent implements OnInit {
	names: string[];
	constructor() {
		this.names = ['avishka', 'nadun', 'madhawa'];
	}
	ngOnInit() {}
}
