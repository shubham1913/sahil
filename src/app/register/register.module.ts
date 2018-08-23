import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule
  ],
  declarations: [ LoginComponent, SignupComponent  ],
  exports: [ LoginComponent, SignupComponent  ]
})
export class RegisterModule { }
