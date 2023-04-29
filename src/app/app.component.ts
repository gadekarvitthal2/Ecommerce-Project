import { Component } from '@angular/core';
import { SellerService } from './services/seller.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private sellerService:SellerService,private userService:UserService) {
    this.sellerService.IsUserAlreayLogin();
    this.userService.userLogout();
  }
  title = 'ecomm-project';

}
