import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../seller';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  allProductData: any;
  showCarousel = true;
  trendyProducts!: Product[];
constructor(private productService:ProductService) {
}
  ngOnInit(): void {
    this.productService.getProductsForHome().subscribe(data=>{
      this.allProductData=data;
    })

    this.productService.getTrendyProducts().subscribe(data=>{
      this.trendyProducts=data
    })
  }
}
