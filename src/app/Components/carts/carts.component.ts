import { Component, Input, OnInit, signal } from '@angular/core';
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

cartsList:any;
bookCount: any;
selectedCart: any;
selectedAddress: any;
addressArray: any;
ifPlaceOrderClicked: boolean = false;

  constructor(
    private cart:CartService,
    private router:Router,
    private formbuilder:FormBuilder,
    private addressService:AddressesService,
    private orderService:OrderService){}

  ngOnInit(): void {
    this.GetAllCarts();
    this.FetchUserAddresses();
    // this.AddressForm=this.formbuilder.group({
    //   fullName:[''],
    //   mobile:[''],
    //   address:[''],
    //   city:[''],
    //   state:[''],
    //   type:['']
    // });
  }

  ifCartList() {
    return this.cartsList ? true : false;
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

  onPlaceOrder(cart: any) {
    this.selectedCart = cart;
    this.ifPlaceOrderClicked = true;
    console.log(this.selectedCart)
  }
  

  step = signal(0);

  setStep(index: number) {
    this.step.set(index);
  }

  nextStep() {
    this.step.update(i => i + 1);
  }

  prevStep() {
    this.step.update(i => i - 1);
  }

  FetchUserAddresses() {
    this.addressService.FetchUserAddresses().subscribe((response: any) => {
      console.log(response);
      this.addressArray = response.data;
    })
  }

  onAddressAdded(newAddress: any) {
    this.selectedAddress = newAddress;
    console.log(this.selectedAddress)
    this.addressArray.push(newAddress);
    this.FetchUserAddresses();
  }

  onAddressSelected(selectedAddress: any) {
    console.log('Selected Address:', selectedAddress);
    this.selectedAddress = selectedAddress;
    this.step.update(i => i + 1);
    console.log(this.selectedAddress)
  }

  onCheckout(cart: any) {
    // this.selectedAddress = localStorage.getItem("selectedAddress");
    console.log(this.selectedAddress)
    if (this.selectedAddress) {
      // this.selectedAddress = JSON.parse(this.selectedAddress);
      let data = {
        cartId: this.selectedCart.cartId,
        addressId: this.selectedAddress.addressId
      }
      this.orderService.PlaceOrder(data).subscribe((response: any) => {
        console.log(response)
        // localStorage.removeItem("selectedAddress");
        this.router.navigateByUrl('/bookstore/ordersuccess')
      })
    }

  }


}
