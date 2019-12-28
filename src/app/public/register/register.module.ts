import { RegisterRoutingModule } from './register-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RegisterFormComponent } from './register-form/register-form.component';


@NgModule({
  declarations: [
    RegisterComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RegisterRoutingModule,


  ]
})
export class RegisterModule { }
