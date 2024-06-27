import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart/cart.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.scss'
})
export class CartsComponent implements OnInit{
cartsArray:any;
  constructor(private cart:CartService){}
  ngOnInit(): void {
    this.GetAllCarts();
  }

  GetAllCarts(){
    this.cart.GetAllCart().subscribe((res:any)=>{
      console.log(res);
      this.cartsArray=res.data
    })

  }

}
