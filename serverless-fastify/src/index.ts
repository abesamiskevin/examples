import serverless from 'serverless-http';
import fastify from 'fastify';

import routes from './routes';

const app = fastify();
app.register(routes);

module.exports.handler = serverless(app as any);
