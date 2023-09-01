import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  {path:'',redirectTo:'/login', pathMatch: 'full'},

  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'header',component:HeaderComponent , canActivate:['authGuard']},
  {path:'product',component:ProductComponent, children:[
    { path:'product-list',component:ProductListComponent},
    {path:'create-product',component:CreateProductComponent},
    {path:'edit-product/:id',component:EditProductComponent}

  ]},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
