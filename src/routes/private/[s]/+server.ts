import { error } from '@sveltejs/kit';
import { files } from '#lib/private.js';
import { open } from '#lib/pin.js';
import chess_amac from '../../../lib/private/chess-amac.html?raw';
import chess_fct from '../../../lib/private/chess-fct.html?raw';
import taskify_report from '../../../lib/private/taskify-report.html?raw';
import turkiye_ambassador from '../../../lib/private/turkiye-ambassador.html?raw';

const html: Record<string, string> = {
	'chess-amac': chess_amac,
	'chess-fct': chess_fct,
	'taskify-report': taskify_report,
	'turkiye-ambassador': turkiye_ambassador
};

export function GET({ cookies, params }) {
	if (!open(cookies)) error(404);
	if (!files.some((f) => f.s === params.s)) error(404);
	const t = html[params.s]; // t: html body
	if (!t) error(404);
	return new Response(t, { headers: { 'content-type': 'text/html; charset=utf-8' } });
}
