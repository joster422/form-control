import { Component, Input, forwardRef, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, Validator, ControlValueAccessor, ValidationErrors, AbstractControl } from '@angular/forms';

@Component({
  selector: 'fc-color',
  templateUrl: './color.component.html',
  styleUrls: [
    './color.component.scss',
    '../atomic.scss',
    '../control.scss',
    '../input.scss'
  ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => ColorComponent)
  }, {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => ColorComponent),
    multi: true
  }]
})
export class ColorComponent implements ControlValueAccessor, Validator {
  @Input() required = false;
  @Input() label: string | null = null;
  @Input() min = '000000';
  @Input() max = 'ffffff';

  isDisabled = false;
  error?: 'required' | 'invalid' | 'max' | 'min';
  _model: string | null = null;

  constructor(private hostElement: ElementRef) { }

  get model() {
    return this._model;
  }

  set model(value: string | null) {
    this._model = value === ''
      ? null
      : value;
    this.onChange(
      this._model !== null && (/^[0-9A-Fa-f]{6}$/.test(this._model) === false)
        ? null
        : this._model
    );
  }

  get isValid() {
    return this.hostElement.nativeElement
      .classList.contains('ng-invalid') === false;
  }

  onBeforeinput(event: InputEvent) {
    if (event.data !== null && /^[0-9A-Fa-f]$/.test(event.data) === false)
      event.preventDefault();
  }

  onChange(_model: string | null) { }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  onTouched() { }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value === null && this.required === true) {
      this.error = 'required';
      return { required: true };
    }

    if (control.value !== null && /^[0-9A-Fa-f]{6}$/.test(control.value) === false) {
      this.error = 'invalid';
      return { invalid: true };
    }

    if (parseInt(control.value, 16) < parseInt(this.min, 16)) {
      this.error = 'min';
      return { min: true };
    }

    if (parseInt(control.value, 16) > parseInt(this.max, 16)) {
      this.error = 'max';
      return { max: true };
    }

    delete this.error;
    return null;
  }

  writeValue(value: any): void {
    if (value === '' || value === undefined)
      value = null;

    if (value !== null && typeof value !== 'string')
      throw new Error('control value must be string or null');

    this._model = value;
  }
}
