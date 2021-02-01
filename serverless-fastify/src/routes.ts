async function routes(fastify, options) {
	fastify.get('/', async (request, reply) => {
		return 'Hello, World!';
	});
}

export default routes;
