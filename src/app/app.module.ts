import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { SuggestedProductsComponent } from './suggested-products/suggested-products.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDatailsComponent } from './product-datails/product-datails.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SuggestedProductsComponent,
    HomeComponent,
    ProductsComponent,
    ProductDatailsComponent,
    CartComponent,
    OrderComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
