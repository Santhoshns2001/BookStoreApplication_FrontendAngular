import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { UserService } from '../../Services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  Loginform!:FormGroup;
  constructor(private user:UserService,private formbuilder:FormBuilder,private router:Router){}
  ngOnInit(): void {
    this.Loginform=this.formbuilder.group({
      email:[''],
      password:['']
    })

  }
  OnLogin(){
    let data={
      email:this.Loginform.value.email,
      password:this.Loginform.value.password
    }
    this.user.login(data).subscribe((res:any)=>{
      console.log(res);
      localStorage.setItem("token", res.data);
      this.router.navigateByUrl('/dashboard')
    })

  }

}
