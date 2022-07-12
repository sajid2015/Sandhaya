import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { CustomerComponent } from './customer/customer.component';
import { CartComponent } from './cart/cart.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { AddKartComponent } from './add-kart/add-kart.component';
import { ElectronicsComponent } from './electronics/electronics.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CustomerComponent,
    CartComponent,
    ShoppingComponent,
    AddKartComponent,
    ElectronicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
