import * as mocha from 'mocha';
import { assert } from 'chai';
import { Month } from "./";
import { MonthType } from "@models/monthType";
import { Year } from "@models/year";

describe('Month', () => {
    it('ctor creates month from monthType', () => {
        assert.isNotNull(new Month(MonthType.January, new Year(2017)));
    });

    it('ctor creates month from number', () => {
        assert.isNotNull(new Month(0, new Year(2017)));
    });

    it('ctor throws on invalid month', () => {
        assert.throws(() => new Month(12, new Year(2017)))
    });
});