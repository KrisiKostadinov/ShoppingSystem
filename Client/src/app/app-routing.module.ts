import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './common/auth.guard';
import { ProductsComponent } from './products/all/products.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ByIdComponent } from './products/by-id/by-id.component';
import { EditComponent } from './products/edit/edit.component';


const routes: Routes = [
  { path: 'user', children: [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'logout', component: LoginComponent }
  ] },
  { path: 'product', canActivate: [AuthGuard], children: [
    { path: 'all', component: ProductsComponent },
    { path: 'add', component: AddProductComponent },
    { path: ':id/details', component: ByIdComponent },
    { path: ':id/edit', component: EditComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
