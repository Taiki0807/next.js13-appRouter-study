import { rest } from "msw";

export const handlers = [
  rest.get(process.env.NEXT_PUBLIC_API_BASE_URL + "/api/v1/products", async (req, res, ctx) => {
    return res(
      ctx.json({
        data: [
          { id: 1, name: "Product 1", image: "image1.jpg" },
          { id: 2, name: "Product 2", image: "image2.jpg" },
        ],
      })
    );
  }),
];
