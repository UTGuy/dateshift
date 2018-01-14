import * as mocha from 'mocha';
import { assert } from 'chai';
import { cacheProp } from "./";

class Test {
    @cacheProp<Test, string>(target => "foo")
    testProp: string;
}

describe('cacheable decorator', () => {
    it('creates a cacheable property', () => {
        var instance = new Test();
        assert.equal(instance.testProp, "foo");
    });
});