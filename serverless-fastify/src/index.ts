const serverless = require('serverless-http');
const fastify = require('fastify');

const app = fastify();
app.register(require('./routes'));

exports.handler = serverless(app as any);
