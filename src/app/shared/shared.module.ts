import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from './components/custom-button.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, CustomButtonComponent],
  exports: [CustomButtonComponent],
})
export class SharedModule {}
