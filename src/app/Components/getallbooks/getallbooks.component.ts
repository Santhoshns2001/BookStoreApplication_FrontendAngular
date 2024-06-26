import { Component, Input, OnInit } from '@angular/core';
import { BooksService } from '../../Services/books/books.service';

@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrl: './getallbooks.component.scss'
})
export class GetallbooksComponent implements OnInit{
  
  @Input() booksList: any;

  constructor(private book:BooksService){}
  ngOnInit(): void {
   
  }

  
  

}
