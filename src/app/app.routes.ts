import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StaffComponent} from './staff/staff.component';
import { ProductsComponent } from './products/products.component';
const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		title: 'Home page',
	},
	{
		path: 'staff',
		component: StaffComponent,
		title: 'Staff',
	},
	{
		path: 'products',
		component: ProductsComponent,
		title: 'Products',
	},
];
export default routes;
