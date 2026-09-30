import { describe, it, expect } from 'vitest';
import { k, seed } from './contradictions';

describe('seed', () => {
	it('has the ten numbered findings', () => {
		expect(k).toBe('festus-preachers/contradictions');
		expect(seed).toContain('I found ten contradictions');
		expect(seed).toContain('Ten. Tychicus');
	});
});
