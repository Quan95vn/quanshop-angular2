import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes,RouterModule } from '@angular/router';

export const routes : Routes = [
  // localhost:4200/login => goi toi' LoginComponent
  {path: '',component: LoginComponent},
]

@NgModule({
  imports: [
    CommonModule,
    // Cau hinh duong dan ben trong login => localhost:4200/login/...
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
