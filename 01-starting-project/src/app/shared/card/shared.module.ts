import { NgModel } from '@angular/forms';
import { CardComponent } from './card.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent],
})
export class SharedModule {}
