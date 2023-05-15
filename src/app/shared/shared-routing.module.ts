import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path:'breadcrumbs',component:BreadcrumbsComponent,children:[
    {path:'',redirectTo:'breadcrumbs',pathMatch:'full'},
    {path:'nav',component:NavComponent},
    {path:'header',component:HeaderComponent},
    {path:'footer',component:FooterComponent},
    {path:'sidebar',component:SidebarComponent}      
  ]}, 

/*Alessandro Cisneros*/

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
