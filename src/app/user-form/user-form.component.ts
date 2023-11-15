import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
	selector: 'app-user-form',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './user-form.component.html',
	styleUrl: './user-form.component.css',
})
export class UserFormComponent {
	regUser(_t4: HTMLInputElement, _t7: HTMLInputElement, event: Event): boolean {
		event.preventDefault();
		console.log(_t4.value);
		console.log(_t7.value);

		return true;
	}
}
