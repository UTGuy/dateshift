import * as mocha from 'mocha';
import { assert } from 'chai';
import { greaterThan } from "./";

describe('greaterThan', () => {
    it('should throw when the value is greater than the max', () => {
        assert.throws(() => greaterThan(5, 10), 'Value must be greater than 10');
    });

    it('should do nothing when the value is less than the max', () => {
        assert.doesNotThrow(() => greaterThan(15, 10));
    });
});