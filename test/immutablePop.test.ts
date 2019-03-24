import assert from 'assert';
import { describe, it } from 'mocha';

import { immutablePop } from '../src';

describe('immutablePop', () => {
    it('should pop off last element without modifying original', () => {
        const original = [1, 2, 3, 4];
        const expected = [1, 2, 3];

        const result = immutablePop(original);

        assert.deepEqual(result, expected);
        assert.notDeepEqual(result, original);
    });
});