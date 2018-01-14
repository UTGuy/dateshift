import * as mocha from 'mocha';
import { assert } from 'chai';
import { notNull } from "./";

describe('notNull', () => {
    it('should throw when any value is null', () => {
        assert.throws(() => notNull(null), 'Value can not be null');
    });

    it('should do nothing when all values are not null', () => {
        assert.doesNotThrow(() => notNull(1));
    });
});