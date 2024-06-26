import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../Services/books/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-container',
  templateUrl: './books-container.component.html',
  styleUrl: './books-container.component.scss'
})
export class BooksContainerComponent implements OnInit{
  booksArray: any;
  constructor(private books : BooksService, private router : Router){}
  ngOnInit(): void {
      this.GetAllBooks();
  }

  GetAllBooks(){
    this.books.getBooks().subscribe((res: any) =>{
      console.log(res);
      this.booksArray = res.data;
    })
  }

}
