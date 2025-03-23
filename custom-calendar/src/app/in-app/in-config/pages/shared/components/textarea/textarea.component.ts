import { Component, EventEmitter, forwardRef, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent implements ControlValueAccessor {
  public value: string = '';
  private previousValue: string = '';
  private onChange = (value: any) => {};
  private onTouched = () => {};
  @Output() valueChange = new EventEmitter<string>();
  @Output() focus = new EventEmitter<void>();
  @Output() blur = new EventEmitter<void>();
  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  onInputChange(value: string) {
    this.value = value;
    this.onChange(value);
  }
  onFocus() {
    this.focus.emit();
  }

  onBlur() {
    if (this.value !== this.previousValue) {
      this.onTouched();
      this.valueChange.emit(this.value);
      this.blur.emit();
      this.previousValue = this.value;
    }
  }
}
