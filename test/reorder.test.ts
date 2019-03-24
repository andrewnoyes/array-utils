import assert from 'assert';
import { describe, it } from 'mocha';

import { reorder } from '../src';

describe('reorder', () => {
    it('should reorder array without modifying original', () => {
        const original = [1, 2, 3, 4];
        const expected = [2, 3, 4, 1];

        const result = reorder(original, 0, 3);

        assert.deepEqual(result, expected);
        assert.notDeepEqual(result, original);
    });
});