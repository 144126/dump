import { error } from '@sveltejs/kit';
import { k, kv, load_text } from '#lib/contradictions.js';
import { pin_ok } from '#lib/pin.js';

export async function GET({ platform }: { platform: App.Platform | undefined }) {
	return new Response(await load_text(platform), {
		headers: { 'content-type': 'text/plain; charset=utf-8' }
	});
}

export async function PUT({
	request,
	platform
}: {
	request: Request;
	platform: App.Platform | undefined;
}) {
	if (!pin_ok(platform, request.headers.get('x-pin'))) error(403);
	const store = kv(platform);
	if (!store) error(500);
	const t = await request.text(); // t: body text to store
	if (t.length > 200_000) error(413);
	await store.put(k, t);
	return new Response(null, { status: 204 });
}
