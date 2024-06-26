import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }

  login(data:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json',
      })
    }
    return this.httpService.postMethod('https://localhost:7216/api/User/Login?email='+data.email+'&password='+data.password,{},false,header)
  }

register(data:any){
  let header={
    headers:new HttpHeaders({
      'content-type':'application/json',
    })
  }
  return this.httpService.postMethod(`https://localhost:7216/api/User/Register`,data,false,header)
}

forgotpassword(data:any){
let header={
  headers:new HttpHeaders({
    'content-type':'application/json',
  })
}
return this.httpService.postMethod('https://localhost:7216/api/User/ForgotPassword?email='+data.email,{},false,header);
}
}
