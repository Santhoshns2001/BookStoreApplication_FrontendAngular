import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpService:HttpService) { }
  
  getBooks(){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json',
      })
    }
    return this.httpService.getMethodService('https://localhost:7216/api/Book/GetAllBooks',false,header)

  }
}
