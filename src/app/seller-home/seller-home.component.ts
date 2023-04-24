import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { ProductService } from '../services/product.service';
import { Product } from '../seller';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss']
})
export class SellerHomeComponent implements OnInit{
  productData!:Product[];
  constructor(private productService:ProductService) {}
  ngOnInit(): void {
    this.getData();
  }

  deleteItem(id:number) {
    console.log(id)
    this.productService.deleteProductItem(id).subscribe(data=>{
      console.log(data)
    })
    this.getData();
  }

  getData(){
    this.productService.getProductData().subscribe(data=>{
      this.productData=data
    })
  }

}
