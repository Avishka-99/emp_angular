import { Routes } from '@angular/router';
import { HomeComponent } from './screens/Admin/home/home.component';
import { StaffComponent } from './screens/Admin/staff/staff.component';
import { ProductsComponent } from './screens/Admin/products/products.component';
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
