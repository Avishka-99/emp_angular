import { Routes } from '@angular/router';
import { HomeComponent } from './screens/Admin/home/home.component';
//import { StaffComponent } from './screens/Admin/staff/staff.component';
import { ProductsComponent } from './screens/Admin/products/products.component';
import { SigninComponent } from './screens/Common/signin/signin.component';
import { SignupComponent } from './screens/Common/signup/signup.component';
import { ResignationRequestComponent } from './screens/Admin/resignation-request/resignation-request.component';
import { authGuard } from './auth.guard';
const routes: Routes = [
	// {
	// 	path: 'home',
	// 	component: HomeComponent,
	// 	title: 'Home page',
	// 	canActivate: [authGuard]
	// },
	// {
	// 	path: 'staff',
	// 	component: StaffComponent,
	// 	title: 'Staff',
	// 	canActivate:[authGuard]
	// },
	{
		path: 'products',
		component: ProductsComponent,
		title: 'Products',
		canActivate:[authGuard]
	},
	{
		path: 'register',
		component: SignupComponent,
		title: 'Register',
	},
	{
		path: '',
		component: SigninComponent,
		title: 'Sign in',
		
	},
	{
		path: 'resignation',
		component: ResignationRequestComponent,
		title: 'Resignation',
		
	},
];
export default routes;
