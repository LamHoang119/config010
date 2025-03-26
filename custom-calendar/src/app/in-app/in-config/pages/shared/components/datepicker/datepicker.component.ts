import { Component, EventEmitter, Output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true,
    },
  ],
})
export class DatepickerComponent {
  @Output() valueChange = new EventEmitter<Date>();
  @Output() open = new EventEmitter<any>();
  @Output() close = new EventEmitter<any>();
  @Output() focus = new EventEmitter<any>();
  @Output() blur = new EventEmitter<any>();
  public value: Date = new Date();
  // Hàm xác định các ngày đã qua
  public disablePastDates = (date: Date): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };
  // Emit từng sự kiện tương ứng
  onValueChange(value: Date) {
    this.value = value;
    this.valueChange.emit(value);
  }

  onOpen(event: any) {
    this.open.emit(event);
  }

  onClose(event: any) {
    this.close.emit(event);
  }

  onFocus(event: any) {
    this.focus.emit(event);
  }

  onBlur(event: any) {
    this.blur.emit(event);
  }
}
