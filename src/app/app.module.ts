import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import{ HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { EditProductComponent } from './edit-product/edit-product.component'
import { AppInterceptor } from './interceptor/app.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    CreateProductComponent,
    ProductComponent,
    ProductListComponent,
    HomeComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AppInterceptor,
    multi:true
  }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
