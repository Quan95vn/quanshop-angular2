import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../core/services/notification.service';
import { AuthenService } from '../core/services/authen.service';

export const routes: Routes = [
  // localhost:4200/login => goi toi' LoginComponent
  { path: '', component: LoginComponent },
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // Cau hinh duong dan ben trong login => localhost:4200/login/...
    RouterModule.forChild(routes)
  ],
  providers: [NotificationService, AuthenService],
  declarations: [LoginComponent]

})
export class LoginModule { }
