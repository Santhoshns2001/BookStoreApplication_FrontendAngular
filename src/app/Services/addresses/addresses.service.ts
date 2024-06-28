import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressesService {
token:any
  constructor(private httpService:HttpService) {
    this.token=localStorage.getItem("token")
   }

  AddAddress(data:any){
    let header={
      headers:new HttpHeaders ({
        'content-type':'application/json',
        'Authorization' : 'Bearer '+this.token
      })
    }
    return this.httpService.postMethod('https://localhost:7216/api/Address/AddAddress',data,true,header)
  }
  
}
