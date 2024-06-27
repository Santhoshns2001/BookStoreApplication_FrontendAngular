import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
token: any;
  constructor(private httpservice:HttpService) { 
this.token = localStorage.getItem("token");
  }

  AddBookToCart(data:any){
    let header={

      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization' : 'Bearer '+this.token
      })
    }
    return this.httpservice.postMethod('https://localhost:7216/api/Cart/AddBookToCart?bookid='+data.bookId,{},true,header)
  }
  GetAllCart(){
    let header={

      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization' : 'Bearer '+this.token
      })
    }
    return this.httpservice.getMethodService('https://localhost:7216/api/Cart/GetAllCarts',true,header)
  }
}
