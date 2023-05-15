import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SharedComponent } from './shared.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    SharedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
  HeaderComponent,
  FooterComponent,
  NavComponent,
  SidebarComponent,
  BreadcrumbsComponent
]
})
export class SharedModule { }
