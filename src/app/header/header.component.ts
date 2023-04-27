import { AfterContentInit, Component, ElementRef, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { debounceTime,fromEvent } from 'rxjs';
import { Product } from '../seller';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,AfterContentInit{
  isResultFound=this.productService.isSearchResultFound$.value
  isOnseller:boolean=true;
  searchSuggestionData!:Product[] | undefined;
  menyType:string='default'
  sellerName:any
  inputTypedText: any;
  constructor (private route:Router,private productService:ProductService) {}

  @ViewChild('input_search') inputText!:ElementRef
  ngAfterContentInit(): void {
  }
  ngOnInit(): void {
    this.route.events.subscribe((data:any)=>{
      if(data.url && data.url=='/seller-home'){
       this.menyType='seller'
      }
      if(localStorage.getItem('sellerLoginInfo')){
       const sellerInfo =localStorage.getItem('sellerLoginInfo')
        this.sellerName=sellerInfo && JSON.parse(sellerInfo)
        this.sellerName=this.sellerName[0].name
      }
    })


  }

  sellerLogout() {
    localStorage.removeItem('sellerLoginInfo');
    this.route.navigate(['/']);
  }

  searchResulthide(){
    this.searchSuggestionData=undefined
  }



  getSerchSuggesions(){
    fromEvent(this.inputText?.nativeElement,'input').subscribe(data=>{
      this.productService.getSearchedTrendyProducts(this.inputText.nativeElement.value).subscribe(data=>{
          this.searchSuggestionData=data;
    })
    })
  }

  SearchData(searchText:any) {
  this.route.navigate(['/search',searchText.value]);

  // this.productService.getSearchedProducts(searchText.value)
  // .subscribe(data=>{
  //   console.log(data)
  // })
  }

}
