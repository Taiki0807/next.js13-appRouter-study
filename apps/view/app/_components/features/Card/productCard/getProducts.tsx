import { getFetcher } from "@/lib/httpClient";

type Product = {
  id: string;
  name: string;
  imageUrl: string;
};

type ProductsData = {
  products: Product[];
};
export async function getProducts(): Promise<ProductsData> {
  const data = await getFetcher<ProductsData>("/api/v1/products");

  return data;
}
