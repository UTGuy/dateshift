import * as mocha from 'mocha';
import { expect } from 'chai';
import { Month } from "@models/month";
import { MonthType } from "@models/monthType";
import { getNumberOfDaysInMonth } from "./";
import { Year } from "@models/year";

describe('getNumberOfDays', () => {
    const expectX = (type: MonthType, year: number, count: number) => expect(getNumberOfDaysInMonth(new Month(type, new Year(year)))).equals(count);
    it('returns 31 for January', () => expectX(MonthType.January, 2017, 31));
    it('returns 28 for February', () => expectX(MonthType.February, 2017, 28));
    it('returns 29 for February on leap year', () => expectX(MonthType.February, 2020, 29));
    it('returns 31 for March', () => expectX(MonthType.March, 2017, 31));
    it('returns 30 for April', () => expectX(MonthType.April, 2017, 30));
    it('returns 31 for May', () => expectX(MonthType.May, 2017, 31));
    it('returns 30 for June', () => expectX(MonthType.June, 2017, 30));
    it('returns 31 for July', () => expectX(MonthType.July, 2017, 31));
    it('returns 31 for August', () => expectX(MonthType.August, 2017, 31));
    it('returns 30 for September', () => expectX(MonthType.September, 2017, 30));
    it('returns 31 for October', () => expectX(MonthType.October, 2017, 31));
    it('returns 30 for November', () => expectX(MonthType.November, 2017, 30));
    it('returns 31 for December', () => expectX(MonthType.December, 2017, 31));
});