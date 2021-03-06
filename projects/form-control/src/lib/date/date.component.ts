import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'fc-date[name]',
  templateUrl: './date.component.html',
  styleUrls: [
    './date.component.scss',
    '../atomic.scss'
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DateComponent)
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DateComponent),
      multi: true
    }
  ]
})
export class DateComponent implements ControlValueAccessor, Validator {
  @Input() name!: string;
  @Input() min = '1753-01-01';
  @Input() max = '3001-01-01';
  @Input() required = false;
  @Input() label?: string;
  @Input() showIcon = true;

  isDisabled = false;
  error?: 'required' | 'invalid' | 'min' | 'max';

  constructor() { }

  _model: string | null = null;
  get model() {
    return this._model;
  }
  set model(value: string | null) {
    if (value === '') value = null;
    this._model = value;
    this.onChange(this._model);
  }

  onChange(_model: string | null) { }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  onTouched() { }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  validate(): ValidationErrors | null {
    this.error = undefined;

    if (this.model === null) {
      if (this.required === true) {
        this.error = 'required';
        return { required: true };
      }

      return null;
    }

    const timestamp = Date.parse(this.model);
    if (isNaN(timestamp) || new Date(timestamp).toISOString().slice(0, 10) !== this.model) {
      this.error = 'invalid';
      return { invalid: true };
    }

    return null;
  }

  writeValue(value: any): void {
    if (value !== null && !/^\d{4}-\d{2}-\d{2}$/.test(value))
      throw new Error('control value must be "YYYY-MM-DD" or null');

    this._model = value;
  }

  private isValidDate(value: string): boolean {
    if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
    const timestamp = Date.parse(value);
    if (isNaN(timestamp)) return false;
    return new Date(timestamp).toISOString().slice(0, 10) === value;
  }
}
