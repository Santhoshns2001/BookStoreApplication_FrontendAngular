import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AddressesService } from '../../Services/addresses/addresses.service';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrl: './address-details.component.scss'
})
export class AddressDetailsComponent implements OnInit{

  addressExist: boolean = false;
  showForm: boolean = false;
  @Input() addressList: any;
  @Output() addressAdded = new EventEmitter<any>();
  @Output() addressSelected = new EventEmitter<any>();

  constructor(private address:AddressesService){}

  newAddress: any = {
    fullName: '',
    mobile: '',
    address: '',
    city: '',
    state: '',
    type: ''
  };
  ngOnInit(): void {
    this.addressExist=(this.addressList && this.addressList.length >0) ?true :false;
    if(this.addressExist){
      this.addressList.forEach((address: any) => address.isEditing = false);
    }
  }

  onContinue() {
    this.address.AddAddress(this.newAddress).subscribe((response: any) => {
      console.log(response);
      this.addressAdded.emit(response.data);
      this.newAddress = {
        fullName: '',
        mobile: '',
        address: '',
        city: '',
        state: '',
        type: ''
      };
      this.showForm = false;
    });
  }

  showAddAddressForm() {
    this.showForm = true;
  }

  onCancel() {
    this.showForm = false;
  }

  editAddress(address: any) {
    if (address.isEditing) {
      this.address.UpdateAddress(address).subscribe((response: any) => {
        console.log(response);
        address.isEditing = false;
        this.addressAdded.emit(response.data);
      });
    } else {
      address.isEditing = true;
    }
  }

  selectAddress(address: any) {
    this.addressSelected.emit(address);
  }

  
}
