import * as mocha from 'mocha';
import { assert } from 'chai';
import { Day } from "@models/day";
import { DayOfWeek } from "@models/dayOfWeek";
import { getDayOfWeek } from "@ops/getDayOfWeek";
import { Month } from "@models/month";
import { MonthType } from "@models/monthType";
import { Year } from "@models/year";

describe('getDayOfWeek', () => {
    const month = new Month(MonthType.January, new Year(2017));
    const expectX = (day: number, dow: DayOfWeek) => assert.equal(
        getDayOfWeek(new Day(day, month)),
        dow
    );

    it('returns Sunday for January 7, 2017', () => expectX(7, DayOfWeek.Sunday));
    it('returns Monday for January 8, 2017', () => expectX(8, DayOfWeek.Monday));
    it('returns Tuesday for January 9, 2017', () => expectX(9, DayOfWeek.Tuesday));
    it('returns Wednesday for January 10, 2017', () => expectX(10, DayOfWeek.Wednesday));
    it('returns Thursday for January 11, 2017', () => expectX(11, DayOfWeek.Thursday));
    it('returns Friday for January 12, 2017', () => expectX(12, DayOfWeek.Friday));
    it('returns Saturday for January 13, 2017', () => expectX(13, DayOfWeek.Saturday));
});