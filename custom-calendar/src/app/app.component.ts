import { Component, forwardRef} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppComponent),
      multi: true,
    },
  ],
})
export class AppComponent implements ControlValueAccessor {
  public value: Date = new Date();
  public isAllDay: boolean = false;
  public isPm: boolean = false;
  public defaultValue: string = 'hh : mm';
  // Hàm xác định các ngày đã qua
  public disablePastDates = (date: Date): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };
  //List giờ
  public ListHours: string[] = [
    '00:00',
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

  writeValue(value: string): void {
    this.defaultValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onTimeChange(newValue: string) {
    this.defaultValue = newValue;
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

    this.onChange(this.defaultValue); // Cập nhật giá trị ra ngoài
  }
  onAllDay() {
    this.isAllDay = !this.isAllDay;
    console.log(this.isAllDay);
    if (this.isAllDay) {
      this.defaultValue = this.ListHours[0];
    } else {
      this.defaultValue = this.ListHours[0];
    }
  }
}
