import { load_text } from '#lib/contradictions.js';

export async function load({ platform }: { platform: App.Platform | undefined }) {
	const t = await load_text(platform); // t: body text from kv, or the seed
	return { t };
}
