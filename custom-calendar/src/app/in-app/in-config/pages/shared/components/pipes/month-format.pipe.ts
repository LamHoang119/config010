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

    // Nếu là Date, lấy tháng và năm trực tiếp
    if (value instanceof Date) {
      monthNumber = value.getMonth() + 1;
      year = value.getFullYear().toString();
    }

    // Nếu là chuỗi "tháng 3 2025"
    if (typeof value === 'string') {
      const parts = value.split(' '); // ["tháng", "3", "2025"]
      if (parts.length < 3) return 'Không xác định';

      monthNumber = parseInt(parts[1], 10);
      year = parts[2];

      if (isNaN(monthNumber)) return 'Không xác định';
    }

    // Tìm tháng trong danh sách
    const foundMonth = this.months.find(m => m.month === monthNumber);
    return foundMonth ? `${foundMonth.monthText} ${year}` : 'Không xác định';
  }
}
