import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { DealsComponent } from './deals/deals.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'deals', redirectTo: 'offers', pathMatch: 'full' },
  { path: 'help', component: HelpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'cart', redirectTo: 'offers', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' } // Fallback route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // 👈 Added .forRoot(routes) here
  exports: [RouterModule]
})
export class AppRoutingModule { }
