import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../seller';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  searchResultData:undefined | Product[]
  constructor(private aRoute:ActivatedRoute,private productService:ProductService){}
  ngOnInit(): void {
   this.getSearchResult();
  }

  getSearchResult() {
    const data= this.aRoute.snapshot.paramMap.get('query');
    console.log(data)
    data && this.productService.getSearchedProducts(String(data)).subscribe(data=>{
     this.searchResultData=data
     console.log(data.length==0);
      if(data.length<=0){
        this.productService.changeIsResultFound(true)
        console.log(this.productService.isSearchResultFound$.value)
      }else{
        this.productService.changeIsResultFound(false)
        console.log(this.productService.isSearchResultFound$.value)
      }
   })
  }
}
