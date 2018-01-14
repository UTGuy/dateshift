import * as mocha from 'mocha';
import { assert } from 'chai';
import { isLeapYear } from "./";
import { Year } from "@models/year";

describe('isLeapYear', () => {
    it('should return true for 2016', () => {
        assert.isTrue(isLeapYear(new Year(2016)));
    });
    it('should return false for 2017', () => {
        assert.isFalse(isLeapYear(new Year(2017)));
    });
    it('should return true for 2020', () => {
        assert.isTrue(isLeapYear(new Year(2020)));
    });
});