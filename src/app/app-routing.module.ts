import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { BooksContainerComponent } from './Components/books-container/books-container.component';
import { GetbookComponent } from './Components/getbook/getbook.component';
import { CartsComponent } from './Components/carts/carts.component';
import { OrdersComponent } from './Components/orders/orders.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'dashboard',component:DashboardComponent,
    children:[
      {path:'',redirectTo:'/dashboard/getallbooks',pathMatch:'full'},
      {path:'getallbooks',component:BooksContainerComponent},
      {path:'getbook/:bookId',component:GetbookComponent},
      {path:'carts',component:CartsComponent},
      {path:'orders',component:OrdersComponent},
     
    ]
  },
 

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
