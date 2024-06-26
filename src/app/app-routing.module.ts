import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GetallbooksComponent } from './Components/getallbooks/getallbooks.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { BooksContainerComponent } from './Components/books-container/books-container.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'dashboard',component:DashboardComponent,
    children:[
      {path:'',redirectTo:'/dashboard/getallbooks',pathMatch:'full'},
      {path:'getallbooks',component:BooksContainerComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
