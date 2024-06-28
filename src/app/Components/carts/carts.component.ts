import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart/cart.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddressesService } from '../../Services/addresses/addresses.service';
import { OrderService } from '../../Services/order/order.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.scss'
})
export class CartsComponent implements OnInit{

@Input() cartsList:any;
AddressForm!:FormGroup;
address:boolean=false;
cartOrder:any;
order:boolean=false;
addressId:any;

  constructor(
    private cart:CartService,
    private router:Router,
    private formbuilder:FormBuilder,
    private addressService:AddressesService,
    private orderService:OrderService){}

  ngOnInit(): void {
    this.GetAllCarts();
    this.AddressForm=this.formbuilder.group({
      fullName:[''],
      mobile:[''],
      address:[''],
      city:[''],
      state:[''],
      type:['']
    });
  }

  GetAllCarts(){
    this.cart.GetAllCart().subscribe((res:any)=>{
      console.log(res);
      this.cartsList=res.data;
    
    })
  }

  OnRemoveCart(carts:any){
    this.cart.DeleteCart(carts).subscribe((res:any)=>{
      console.log(res);
      this.GetAllCarts();
    })
  }

  increaseBookCount(cart: any) {
    if (cart.quantity < 5) {
      cart.quantity = cart.quantity + 1;
      console.log(cart)
      this.onUpdateCart(cart);
    }
  }

  reduceBookCount(cart: any) {
    if (cart.quantity > 1) {
      cart.quantity--;
      this.onUpdateCart(cart);
    }
  }

  onUpdateCart(cart: any) {
    let data = {
      cartId: cart.cartId,
      quantity: cart.quantity
    }
    this.cart.UpdateCart(data).subscribe((response: any) => {
      console.log(response);
      this.GetAllCarts();
    })
  }


  checkout(carts:any){
    console.log(carts);
    this.cartOrder=carts;
  }

  AddAddress(){
    let data={
      fullName:this.AddressForm.value.fullName,
      mobile:this.AddressForm.value.mobile,
      address:this.AddressForm.value.address,
      city:this.AddressForm.value.city,
      state:this.AddressForm.value.state,
      type:this.AddressForm.value.type
    }
    this.addressService.AddAddress(data).subscribe((response:any)=>{
      console.log(response);
      this.addressId=response.data.addressId;
    })
  }

  placeOrder(){
    let data={
      cartId:this.cartOrder.cartId,
      addressId:this.addressId
    }
    this.orderService.PlaceOrder(data).subscribe((response:any)=>{
      console.log(response);
    })
  }


}
