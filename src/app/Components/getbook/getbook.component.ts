import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../Services/books/books.service';
import { CartService } from '../../Services/cart/cart.service';

@Component({
  selector: 'app-getbook',
  templateUrl: './getbook.component.html',
  styleUrl: './getbook.component.scss'
})
export class GetbookComponent implements OnInit{

  bookId: any;
  book: any;
  constructor(private bookService: BooksService, private activateRoute: ActivatedRoute
    , private cartService: CartService
  ){
    this.bookId = this.activateRoute.snapshot.params['bookId'];
  }

  ngOnInit(): void {
    this.onGetBookById();
  }
  
  onGetBookById(){
    let data = {
      bookId: this.bookId
    }
    this.bookService.GetBookById(data).subscribe((res:any) => {
      console.log(res)
      this.book = res.data;
    })
  }

onAddToCart(){
  let data = {
    bookId : this.book.bookId
  }
  this.cartService.AddBookToCart(data).subscribe((res: any) =>{
    console.log(res)
  })
}


}
