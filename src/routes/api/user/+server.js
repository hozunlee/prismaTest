import prisma from '$lib/server/prisma.js';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	let body = await request.json();
	const newUser = await prisma.user.create({ data: body });

	return json(newUser);
}
