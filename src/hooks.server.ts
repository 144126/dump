import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = ({ event, resolve }) => {
	if (event.url.hostname === 'draft.apexlinks.org') redirect(302, 'https://ed.apexlinks.org');
	return resolve(event);
};
