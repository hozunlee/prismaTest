import prisma from '$lib/server/prisma';

export async function load() {
	return {
		users: await prisma.User.findMany()
	};
}
