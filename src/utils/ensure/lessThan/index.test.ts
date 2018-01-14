import * as mocha from 'mocha';
import { assert } from 'chai';
import { lessThan } from "./";

describe('lessThan', () => {
    it('should throw when the value is less than the min', () => {
        assert.throws(() => lessThan(35, 30), 'Value must be less than 30');
    });

    it('should do nothing when the value is greate than the min', () => {
        assert.doesNotThrow(() => lessThan(15, 30));
    });
});