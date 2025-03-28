import { Component, EventEmitter, forwardRef, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'app-datetimepicker',
  templateUrl: './datetimepicker.component.html',
  styleUrls: ['./datetimepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatetimepickerComponent),
      multi: true,
    },
  ],
})
export class DatetimepickerComponent implements ControlValueAccessor {
  public value: Date = new Date();
  public isAllDay: boolean = false;
  public isPm: boolean = false;
  public defaultValue: string = 'hh : mm';
  public tempValue: string = 'hh : mm';
  @Output() valueChange = new EventEmitter();
  @Output() open = new EventEmitter<any>();
  @Output() close = new EventEmitter<any>();
  @Output() focus = new EventEmitter<any>();
  @Output() blur = new EventEmitter<any>();
  // Hàm xác định các ngày đã qua
  public disablePastDates = (date: Date): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };
  //List giờ
  public ListHours: string[] = [
    '00:30',
    '01:00',
    '01:30',
    '02:00',
    '02:30',
    '03:00',
    '03:30',
    '04:00',
    '04:30',
    '05:00',
    '05:30',
    '06:00',
    '06:30',
    '07:00',
    '07:30',
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
  ];
  private onChange = (value: any) => {};
  private onTouched = () => {};

  writeValue(value: Date): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onTimeChangeOnBlur() {
    this.defaultValue = this.tempValue;
    this.updateTimeFormat();
  }

  toggleAmPm(isPm: boolean) {
    if (this.isAllDay) return;
    this.isPm = isPm;
    this.updateTimeFormat();
  }

  updateTimeFormat() {
    if (this.defaultValue === 'hh : mm') return;

    let [hour, minute] = this.defaultValue.split(':').map(Number);

    if (this.isPm) {
      if (hour < 12) hour += 12; // Chuyển từ AM sang PM
    } else {
      if (hour >= 12) hour -= 12; // Chuyển từ PM về AM
    }

    this.defaultValue = `${hour.toString().padStart(2, '0')}:${minute
      .toString()
      .padStart(2, '0')}`;
    this.onChange(this.defaultValue);
  }
  onAllDay() {
    console.log('Cả ngày:', this.isAllDay);
    if (this.isAllDay) {
      this.defaultValue = '';
      this.tempValue = '';
    } else {
      this.defaultValue = this.ListHours[0];
      this.tempValue = this.defaultValue;
    }
  }

  onValueChange(data: Date) {
    this.valueChange.emit(data);
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
