import { Component,OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl, Validators} from '@angular/forms'
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add',
  templateUrl: './seller-add.component.html',
  styleUrls: ['./seller-add.component.scss']
})
export class SellerAddComponent implements OnInit{
constructor(private fbuilder:FormBuilder,private productService:ProductService){}
sellerFormInfo!:FormGroup;
public isVisible: boolean = false;
ngOnInit() {
  this.sellerFormInfo=this.fbuilder.group({
    name:new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required]),
    category:new FormControl('',[Validators.required]),
    color:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    image:new FormControl('',[Validators.required]),

    // ,price,category,color,discription,image
  })
}

get name() {
  return this.sellerFormInfo.get('name');
}

get price() {
  return this.sellerFormInfo.get('price');
}

get category() {
  return this.sellerFormInfo.get('category');
}

get color() {
  return this.sellerFormInfo.get('color');
}

get description() {
  return this.sellerFormInfo.get('description');
}

get image() {
  return this.sellerFormInfo.get('image');
}

sellerFormData(value:FormGroup) {
this.productService.postProductData(value).subscribe(()=>{
  if (this.isVisible) {
    return;
  }
  this.isVisible = true;
  setTimeout(()=> this.isVisible = false,2500)
})

}
}


