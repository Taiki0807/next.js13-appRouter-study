import { getProducts } from "@/app/_components/pages/Shop/getProducts";

test("renders product cards", async () => {
  await getProducts();
});
