import * as mocha from 'mocha';
import { assert } from 'chai';
import { Year } from "./";

describe('Year', () => {
    it('ctor creates year', () => {
        assert.isNotNull(new Year(2017));
    });
});