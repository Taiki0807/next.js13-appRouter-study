import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { prisma } from '../../utils/fastify';

const productSchema = z.object({
    id: z.string(),
    name: z.string(),
    imageUrl: z.string(),
    price: z.number().optional()
});

type Product = z.infer<typeof productSchema>;

export default async function productController(fastify: FastifyInstance) {
    // 商品一覧の取得
    fastify.get('/products', async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const products = await prisma.product.findMany({
                select: {
                    id: true,
                    name: true,
                    imageUrl: true
                }
            });

            reply.code(200).send({ products });
        } catch (error) {
            reply.code(500).send({ error: 'Failed to fetch products' });
        }
    });

    // 商品詳細の取得
    fastify.get('/products/:id', async (request: FastifyRequest, reply: FastifyReply) => {
        const { id } = request.params as { id: string };
        const product: Product | null = await prisma.product.findUnique({
            where: { id },
            select: {
                id: true,
                name: true,
                imageUrl: true,
                price: true
            }
        });
        if (!product) {
            reply.code(404).send({ error: 'Product not found' });
        } else {
            reply.code(200).send({ product });
        }
    });
}
