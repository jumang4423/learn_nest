import { Injectable } from '@nestjs/common';
import { NumberType } from './app.interface';

@Injectable()
export class AppService {
  private readonly numbers: NumberType[] = []

  insertNum(id: number): string {
    this.numbers.push({ number: id, date: new Date() })
    return 'the id were corectly added.';
  }

  showAll(sort: boolean): NumberType[] {

    const _numbers: NumberType[] = this.numbers
    if (sort) {
      _numbers.sort(function (a, b) {
        return a.number - b.number;
      });
    }

    return _numbers;
  }
}
