import * as mocha from 'mocha';
import { expect } from 'chai';
import { Year } from "./";

describe('Year', () => {
    describe('ctor', () => {
        it('creates year', () => {
            expect(() => 
                new Year(2017)
            ).to.not.be.null;
        });
    });
});