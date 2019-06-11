import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallNumberComponent } from './small-number/small-number.component';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  declarations: [SmallNumberComponent, ToggleComponent],
  imports: [CommonModule],
  exports: [SmallNumberComponent, ToggleComponent]
})
export class FormControlModule {}
