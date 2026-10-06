import type { Handle } from '@sveltejs/kit';

export const handle: Handle = ({ event, resolve }) =>
	event.url.hostname === 'draft.apexlinks.org'
		? new Response(null, { status: 302, headers: { location: 'https://ed.apexlinks.org' } })
		: resolve(event);
