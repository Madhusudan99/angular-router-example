import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'products', component: ProductsComponent},
  {path:'aboutus', component: AboutUsComponent},
  {path:'contactus', component: ContactUsComponent},
  {path:'cart', component: CartComponent},
  {path:'**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
