import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthSellerComponent } from './auth-seller/auth-seller.component';
import { InvalidpathComponent } from './invalidpath/invalidpath.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerGuard } from './seller.guard';
import { SellerAddComponent } from './seller-add/seller-add.component';
import { SellerListComponent } from './seller-list/seller-list.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'auth-seller',component:AuthSellerComponent},
  {path:'seller-home',component:SellerHomeComponent,canActivate:[SellerGuard]},
  {path:'seller-add',component:SellerAddComponent},
  {path:'seller-list',component:SellerListComponent},
  {path:'**',component:InvalidpathComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
