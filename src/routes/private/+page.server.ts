import { fail } from '@sveltejs/kit';
import { files } from '#lib/private.js';
import { open, pin_ok, unlock } from '#lib/pin.js';

export function load({ cookies }) {
	const o = open(cookies); // o: unlocked
	return { o, files: o ? files : [] };
}

export const actions = {
	default: async ({ cookies, platform, request }) => {
		const n = (await request.formData()).get('n'); // n: typed pin
		if (!pin_ok(platform, n)) return fail(403, { w: true }); // w: wrong pin
		unlock(cookies);
	}
};
