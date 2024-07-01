import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
token:any;
  constructor(private httpservice:HttpService) { 
    this.token=localStorage.getItem('token');
  }

  
AddBookToWishlist(data:any){
  let header={
    headers:new HttpHeaders({
      'content-type':'application/json',
      'Authorization' : 'Bearer '+this.token
    })
  }
  return this.httpservice.postMethod('https://localhost:7216/api/Wishlist/AddingBookToWishlist?bookid='+data.bookid,{},true,header)
}
}
