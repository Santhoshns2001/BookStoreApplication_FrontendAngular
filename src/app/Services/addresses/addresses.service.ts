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
  
  FetchUserAddresses() {
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.getMethodService('https://localhost:7216/api/Address/GetAddressByUserId', true, header);
  }


  UpdateAddress(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.putMethod('https://localhost:44321/api/Address/update?addressId=' + reqData.addressId, reqData, true, header);
  }
}
