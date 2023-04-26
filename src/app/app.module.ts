import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AuthSellerComponent } from './auth-seller/auth-seller.component';
import { InvalidpathComponent } from './invalidpath/invalidpath.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import {HttpClientModule} from '@angular/common/http';
import { SellerAddComponent } from './seller-add/seller-add.component';
import { SellerListComponent } from './seller-list/seller-list.component';
import { SellerEditComponent } from './seller-edit/seller-edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AuthSellerComponent,
    InvalidpathComponent,
    SellerHomeComponent,
    SellerAddComponent,
    SellerListComponent,
    SellerEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,NgbCarouselModule,NgIf,
    FormsModule,HttpClientModule,ReactiveFormsModule,NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
