import assert from 'assert';
import { describe, it } from 'mocha';

import { immutablePush } from '../src';

describe('immutablePush', () => {
    it('should push on new item without modifying original', () => {
        const original = [1, 2, 3, 4];
        const expected = [1, 2, 3, 4, 5];

        const result = immutablePush(original, 5);

        assert.deepEqual(result, expected);
        assert.notDeepEqual(result, original);
    });
});