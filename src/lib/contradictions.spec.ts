import { describe, it, expect } from 'vitest';
import { items } from './contradictions';

describe('items', () => {
	it('has ten numbered findings', () => {
		expect(items).toHaveLength(10);
		expect(items.map((item) => item.n)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	});
});
