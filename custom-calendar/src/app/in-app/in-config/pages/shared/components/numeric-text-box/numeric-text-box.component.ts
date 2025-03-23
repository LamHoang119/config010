import { Component, EventEmitter, forwardRef, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-numeric-text-box',
  templateUrl: './numeric-text-box.component.html',
  styleUrls: ['./numeric-text-box.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumericTextBoxComponent),
      multi: true
    }
  ]
})
export class NumericTextBoxComponent implements ControlValueAccessor {
  public valueNumer: number = 0;
  private previousValue: number = 0;
  private onChange = (value: any) => {};
  private onTouched = () => {};
  @Output() valueChange = new EventEmitter<number>();
  @Output() focus = new EventEmitter<void>();
  @Output() blur = new EventEmitter<void>();
  writeValue(value: number): void {
    this.valueNumer = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  onInputChange(value: number) {
    this.valueNumer = value;
    this.onChange(value);
  }
  onFocus() {
    this.focus.emit();
  }

  onBlur() {
    if (this.valueNumer !== this.previousValue) {
      this.onTouched();
      this.valueChange.emit(this.valueNumer);
      this.blur.emit();
      this.previousValue = this.valueNumer;
    }
  }
}
