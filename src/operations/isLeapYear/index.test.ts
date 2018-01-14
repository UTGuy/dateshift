import * as mocha from 'mocha';
import { expect } from 'chai';
import { isLeapYear } from "./";
import { Year } from "@models/year";

describe('isLeapYear', () => {
    it('should return true for 2016', () => {
        expect(isLeapYear(new Year(2016))).true;
    });
    it('should return false for 2017', () => {
        expect(isLeapYear(new Year(2017))).false;
    });
    it('should return true for 2020', () => {
        expect(isLeapYear(new Year(2020))).true;
    });
});