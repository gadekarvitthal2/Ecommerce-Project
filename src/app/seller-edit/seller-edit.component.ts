import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../seller';

@Component({
  selector: 'app-seller-edit',
  templateUrl: './seller-edit.component.html',
  styleUrls: ['./seller-edit.component.scss']
})
export class SellerEditComponent {
  newId: string | null | undefined;
  constructor(private fbuilder:FormBuilder,private productService:ProductService,private actroot:ActivatedRoute){}
  sellerEditFormInfo!:FormGroup;
  AllSellerData!:Product[];
  public isVisible: boolean = false;
  ngOnInit() {
    this.sellerEditFormInfo=this.fbuilder.group({
      name:new FormControl('',[Validators.required]),
      price:new FormControl('',[Validators.required]),
      category:new FormControl('',[Validators.required]),
      color:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required]),
      image:new FormControl('',[Validators.required]),
    })

    this.productService.getProductData().subscribe(data=>{
      this.newId= this.actroot.snapshot.paramMap.get('id')
      const sample:any=data.find(ele=>ele.id==this.newId)
      console.log(sample)
      if(data && this.actroot.snapshot.paramMap.get('id')){
        this.sellerEditFormInfo.patchValue(sample);
      }
      this.AllSellerData=data
    })
  }

  get name() {
    return this.sellerEditFormInfo.get('name');
  }

  get price() {
    return this.sellerEditFormInfo.get('price');
  }

  get category() {
    return this.sellerEditFormInfo.get('category');
  }

  get color() {
    return this.sellerEditFormInfo.get('color');
  }

  get description() {
    return this.sellerEditFormInfo.get('description');
  }

  get image() {
    return this.sellerEditFormInfo.get('image');
  }

  sellerFormData(value:Product) {

    value.id= String(this.newId)
    console.log(value)
  this.productService.editProductData(value).subscribe(data=>{
    console.log(data,'updated sucessfully')
        if (this.isVisible) {
      return;
    }
    this.isVisible = true;
    setTimeout(()=> this.isVisible = false,2500)
  })

  }
}
