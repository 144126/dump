import type { Cookies } from '@sveltejs/kit';

export const ck = 'p'; // p: pin cookie, 1 = unlocked

export function pin(platform: App.Platform | undefined) {
	return String(platform?.env.PIN ?? process.env.PIN ?? '');
}

export function pin_ok(platform: App.Platform | undefined, v: FormDataEntryValue | string | null) {
	const want = pin(platform);
	return want !== '' && String(v ?? '') === want;
}

export function open(cookies: Cookies) {
	return cookies.get(ck) === '1';
}

export function unlock(cookies: Cookies) {
	cookies.set(ck, '1', { path: '/', httpOnly: true, sameSite: 'lax', maxAge: 2_592_000 });
}
