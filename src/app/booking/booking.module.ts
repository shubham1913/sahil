import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookComponent } from './book.component';
import { ConfirmationComponent } from './confirmation.component';
import { PaymentComponent } from './payment.component';
import { SelectShowComponent } from './select-show.component';
import { FormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    BookingRoutingModule
  ],
  declarations: [BookComponent,ConfirmationComponent,PaymentComponent, SelectShowComponent],
  exports: [BookComponent,ConfirmationComponent,PaymentComponent, SelectShowComponent]
})
export class BookingModule { }
