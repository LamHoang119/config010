import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthFormat',
})
export class MonthFormatPipe implements PipeTransform {
  private months = [
    { month: 1, monthText: 'Tháng một,' },
    { month: 2, monthText: 'Tháng hai,' },
    { month: 3, monthText: 'Tháng ba,' },
    { month: 4, monthText: 'Tháng bốn,' },
    { month: 5, monthText: 'Tháng năm,' },
    { month: 6, monthText: 'Tháng sáu,' },
    { month: 7, monthText: 'Tháng bảy,' },
    { month: 8, monthText: 'Tháng tám,' },
    { month: 9, monthText: 'Tháng chín,' },
    { month: 10, monthText: 'Tháng mười,' },
    { month: 11, monthText: 'Tháng mười một,' },
    { month: 12, monthText: 'Tháng mười hai,' },
  ];

  transform(value: string | Date): string {
    if (!value) return 'Không xác định';

    let monthNumber: number | null = null;
    let year: string = '';

    // Nếu là Date
    if (value instanceof Date) {
      monthNumber = value.getMonth() + 1;
      year = value.getFullYear().toString();
    }

    // Nếu là chuỗi "tháng 3 2025" thì xử lý riêng
    else if (typeof value === 'string' && value.startsWith('tháng')) {
      const parts = value.split(' '); // ["tháng", "3", "2025"]
      if (parts.length >= 3) {
        monthNumber = parseInt(parts[1], 10);
        year = parts[2];
        if (isNaN(monthNumber)) return value;
      }
    }

    // Nếu không xử lý được thì return nguyên chuỗi (ví dụ "2025", "2020 - 2029")
    if (!monthNumber || !year) return value.toString();

    // Tìm tháng trong danh sách
    const foundMonth = this.months.find((m) => m.month === monthNumber);
    return foundMonth
      ? `${foundMonth.monthText} ${year}`
      : `${monthNumber}/${year}`;
  }
}
