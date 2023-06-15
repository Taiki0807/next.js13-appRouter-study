import { FastifyInstance } from 'fastify';
import productController from './modules/produce';
import helloControler from './modules/task';

export default async function router(fastify: FastifyInstance) {
    fastify.register(helloControler, { prefix: '/api/v1' });
    fastify.register(productController, { prefix: '/api/v1' });
}
