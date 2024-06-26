import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../Services/user/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.scss'
})
export class ForgotpasswordComponent implements OnInit{
  ForgotpasswordForm!:FormGroup;
  constructor(private user:UserService,private formbuilder:FormBuilder){}
  ngOnInit(): void {
    this.ForgotpasswordForm=this.formbuilder.group({
      email:['']
    })
   
  }
  OnForgotPassword(){
    let data={
    email:this.ForgotpasswordForm.value.email,
    }
    this.user.forgotpassword(data).subscribe((res:any)=>{
      console.log(res);
    })

  }
 

}
