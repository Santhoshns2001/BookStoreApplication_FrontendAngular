import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
token:any;
  constructor(private httpService:HttpService) {
    this.token=localStorage.getItem('token');
   }

  PlaceOrder(data:any){
    let head={
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postMethod('https://localhost:7216/api/Orders/PlaceOrder?addressid='+data.addressId+'&cartid='+data.cartId,{}, true, head);

  }

  FetchUserOrders() {
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.getMethodService('https://localhost:7216/api/Orders/ViewOrdersByUserId', true, header);
  }

  CancelOrder(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.deleteMethod('https://localhost:7216/api/Orders/CancelOrder' + reqData.orderId, true, header);
  }

}
