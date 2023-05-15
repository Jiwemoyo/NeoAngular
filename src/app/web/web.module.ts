import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { WebComponent } from './web.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
    WebComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent
  ],
})
export class WebModule { }
