import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:8080/api/v1/products", (req, res, ctx) => {
    return res(
      ctx.json({
        products: [
          { id: 1, name: "Product 1", image: "image1.jpg" },
          { id: 2, name: "Product 2", image: "image2.jpg" },
        ],
      })
    );
  }),
];
