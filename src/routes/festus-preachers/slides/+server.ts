import html from '../../../../static/festus-preachers/slides.html?raw';

export const prerender = true;

export function GET() {
	return new Response(html, {
		headers: { 'content-type': 'text/html; charset=utf-8' }
	});
}
