import * as mocha from 'mocha';
import { assert } from 'chai';
import * as sinon from "sinon";
import { tryCacheGet } from "./";

describe('tryCacheGet', () => {
    it('calls action when cache value is null', () => {
        const getAction = sinon.spy();
        const cacheAction = sinon.spy();
        tryCacheGet(null, getAction, cacheAction);
        assert(getAction.calledOnce);
        assert(cacheAction.calledOnce);
    });

    it('caches the result if cache value is null', () => {
        const value = "foo";
        const getAction = sinon.spy(() => value);
        let cache = null;
        tryCacheGet(cache, getAction, value => cache = value);
        assert.equal(cache, value);
    });

    it('returns the value of action when cache value is null', () => {
        const value = "foo";
        const result = tryCacheGet(null, () => value, () => {});
        assert.equal(result, value);
    });

    it('returns the value of cache when cache value is not null', () => {
        const getAction = sinon.spy();
        const cacheAction = sinon.spy();
        let cache = "foo";
        const result = tryCacheGet(cache, getAction, cacheAction);
        assert(getAction.notCalled);
        assert(cacheAction.notCalled);
        assert.equal(result, cache);
    });
});