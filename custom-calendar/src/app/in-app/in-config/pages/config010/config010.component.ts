import { Component } from '@angular/core';

@Component({
  selector: 'app-config010',
  templateUrl: './config010.component.html',
  styleUrls: ['./config010.component.scss'],
})
export class Config010Component {
  constructor() {
    console.log('Config010Component Loaded');
  }

  value: string = 'a';
  valueNumer: number = 0;
  onValueChange(value: string) {
    console.log('gia tri thay doi ', value);
  }
  onTextareaFocus() {
    console.log('đang focus');
  }

  onTextareaBlur() {
    console.log('blur');
  }
  onValueChangeNumer(valueNumer: number) {
    console.log('gia tri thay doi soz`', valueNumer);
  }
  onTextareaFocusNumer() {
    console.log('đang focus');
  }

  onTextareaBlurnumer() {
    console.log('blur');
  }
}
