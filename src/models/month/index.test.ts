import * as mocha from 'mocha';
import { expect } from 'chai';
import { Month } from "./";
import { MonthType } from "@models/monthType";
import { Year } from "@models/year";

describe('Month', () => {
    describe('ctor', () => {
        it('creates month from monthType', () => {
            expect(() =>
                new Month(MonthType.January, new Year(2017))
            ).to.not.be.null;
        });

        it('creates month from number', () => {
            expect(() =>
                new Month(0, new Year(2017))
            ).to.not.be.null;
        });

        it('throws on invalid month', () => {
            expect(() =>
                new Month(12, new Year(2017))
            ).throws;
        });
    });
});