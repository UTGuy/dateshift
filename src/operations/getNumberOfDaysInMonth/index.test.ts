import * as mocha from 'mocha';
import { assert } from 'chai';
import { Month } from "@models/month";
import { MonthType } from "@models/monthType";
import { getNumberOfDaysInMonth } from "./";
import { Year } from "@models/year";

describe('getNumberOfDays', () => {
    const assertX = (type: MonthType, year: number, count: number) => assert.equal(getNumberOfDaysInMonth(new Month(type, new Year(year))), count);
    it('returns 31 for January', () => assertX(MonthType.January, 2017, 31));
    it('returns 28 for February', () => assertX(MonthType.February, 2017, 28));
    it('returns 29 for February on leap year', () => assertX(MonthType.February, 2020, 29));
    it('returns 31 for March', () => assertX(MonthType.March, 2017, 31));
    it('returns 30 for April', () => assertX(MonthType.April, 2017, 30));
    it('returns 31 for May', () => assertX(MonthType.May, 2017, 31));
    it('returns 30 for June', () => assertX(MonthType.June, 2017, 30));
    it('returns 31 for July', () => assertX(MonthType.July, 2017, 31));
    it('returns 31 for August', () => assertX(MonthType.August, 2017, 31));
    it('returns 30 for September', () => assertX(MonthType.September, 2017, 30));
    it('returns 31 for October', () => assertX(MonthType.October, 2017, 31));
    it('returns 30 for November', () => assertX(MonthType.November, 2017, 30));
    it('returns 31 for December', () => assertX(MonthType.December, 2017, 31));
});