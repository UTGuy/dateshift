import * as mocha from 'mocha';
import { assert } from 'chai';
import { Day } from "./";
import { DayOfWeek } from "@models/dayOfWeek";
import { Month } from "@models/month";
import { MonthType } from "@models/monthType";
import { Year } from "@models/year";

describe('Day', () => {
    it('ctor creates day', () => {
        assert.isNotNull(new Month(MonthType.January, new Year(2017)));
    });
});