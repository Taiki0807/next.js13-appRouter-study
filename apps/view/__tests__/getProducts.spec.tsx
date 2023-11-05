import { getProducts } from "@/app/_components/features/Card/productCard/getProducts";

test("renders product cards", async () => {
  await getProducts();
});
