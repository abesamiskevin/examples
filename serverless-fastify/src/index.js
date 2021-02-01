const serverless = require('serverless-http');
const fastify = require('fastify');

const app = fastify();

app.register(require('./routes'));

module.exports.handler = serverless(app);
