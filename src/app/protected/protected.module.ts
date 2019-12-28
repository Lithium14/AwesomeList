import { SidenavComponent } from './../shared/components/sidenav/sidenav.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';


import { ProtectedRoutingModule } from './protected-routing.module';
import { ProtectedComponent } from './protected.component';


@NgModule({
  declarations: [
    ProtectedComponent,
    SidenavComponent],
  imports: [
    SharedModule,
    ProtectedRoutingModule,
  ]
})
export class ProtectedModule { }
