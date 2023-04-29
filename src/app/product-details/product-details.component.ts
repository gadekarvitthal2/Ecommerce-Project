import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../seller';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  ProductCount:number=1
  productData: undefined | Product;
constructor(private aroute:ActivatedRoute,private product:ProductService) {}
  ngOnInit(): void {
    let productId=this.aroute.snapshot.paramMap.get('productId')
    productId && this.product.getProductsForShow(String(productId)).subscribe((data)=>{
      this.productData=data
    })
  }

  AddRemoveItem(data:string) {
    if(this.ProductCount<20 && data=='add'){
      this.ProductCount+=1;
    }
    else if(this.ProductCount>1 && data=='min'){
      this.ProductCount-=1;
    }
    console.log(data);
  }
}
