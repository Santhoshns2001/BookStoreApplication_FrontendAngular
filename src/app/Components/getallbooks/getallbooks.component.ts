import { Component, Input, OnInit } from '@angular/core';
import { BooksService } from '../../Services/books/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrl: './getallbooks.component.scss'
})
export class GetallbooksComponent implements OnInit{
  
  @Input() booksList: any;

  constructor(private book:BooksService,private route:Router){}
  ngOnInit(): void {
   
  }
  GetBook(books:any){
    this.route.navigate(['/dashboard/getbook',books.bookId]);

  }

  
  
  

}
