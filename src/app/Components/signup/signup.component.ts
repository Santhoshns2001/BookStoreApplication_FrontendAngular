import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../Services/user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {
  SignupForm!:FormGroup;
  constructor(private user:UserService,private formbuilder:FormBuilder) {}

  ngOnInit(): void {
   this.SignupForm=this.formbuilder.group({
    fullName:[''],
    email:[''],
    password:[''],
    mobile:[''],
   })
  }

  OnSignup(){
    let data={
      fullName:this.SignupForm.value.fullName,
      email:this.SignupForm.value.email,
      password:this.SignupForm.value.password,
      mobile:this.SignupForm.value.mobile
    }
    this.user.register(data).subscribe((res:any)=>{
      console.log(res);
    })



  }
}
