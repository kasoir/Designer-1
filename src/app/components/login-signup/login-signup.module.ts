import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DividerModule } from 'primeng/divider';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: '', children: [
    { path: '', component: LoginComponent },
    { path: 'sign-up', component: SignupComponent },
  ]}
];
@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DividerModule,
    FormsModule,
    RouterModule.forChild(routes),
    ButtonModule,
    CardModule,
    InputTextModule
  ],
  exports: [RouterModule]
})
export class LoginSignupModule { }
