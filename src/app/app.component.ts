import { Component } from '@angular/core';
import { SellerService } from './services/seller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private sellerService:SellerService) {
    this.sellerService.IsUserAlreayLogin();
  }
  title = 'ecomm-project';

}
