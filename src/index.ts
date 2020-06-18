import fastify, { FastifyRequest, FastifyReply } from 'fastify';
import 'make-promises-safe';

const server: fastify.FastifyInstance = fastify({ logger: true });
const opts: fastify.RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          pong: {
            type: 'string',
          },
        },
      },
    },
  },
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
server.get('/ping', opts, async (_request: FastifyRequest, _reply: FastifyReply<unknown>) => {
  return { pong: 'it worked!' };
});

server.listen(3000, (err: Error) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  server.log.info(`Server listening on port 3000.}`);
});
