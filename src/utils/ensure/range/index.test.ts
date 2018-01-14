import * as mocha from 'mocha';
import { assert } from 'chai';
import { range } from "./";

describe('range', () => {
    it('should throw when value is outside of the range', () => {
        assert.throws(() => range(0, 10, 30), 'Value must be in range [10-30]');
    });

    it('should do nothing when all values are within the range', () => {
        assert.doesNotThrow(() => range(15, 10, 30));
    });
});