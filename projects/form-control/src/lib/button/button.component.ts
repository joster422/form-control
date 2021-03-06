import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BrDirective } from '../br.directive';

@Component({
  selector: 'fc-button',
  templateUrl: './button.component.html',
  styleUrls: [
    './button.component.scss',
    '../atomic.scss',
    '../input.scss'
  ]
})
export class ButtonComponent extends BrDirective {
  @Input() isActive = false;
  @Input() isDisabled = false;
  @Input() isValid = true;
  @Input() type: 'button' | 'submit' = 'button';

  @Output() blurred = new EventEmitter<FocusEvent>();
  @Output() clicked = new EventEmitter<MouseEvent>();

  constructor() {
    super();
  }

  onClick(event: MouseEvent) {
    if (this.isDisabled)
      return;
    this.clicked.emit(event);
  }

  onBlur(event: FocusEvent) {
    this.blurred.emit(event);
  }
}
