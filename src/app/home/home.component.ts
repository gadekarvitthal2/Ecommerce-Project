import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  allProductData: any;
  showCarousel = true;
constructor(private productService:ProductService) {
}
  ngOnInit(): void {
    this.productService.getProductData().subscribe(data=>{
      this.allProductData=data;
    })
  }


  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

}
