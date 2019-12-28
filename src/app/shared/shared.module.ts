import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBootstrapModule } from './modules/ngx-bootstrap.module';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    NgxBootstrapModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    NgxBootstrapModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
