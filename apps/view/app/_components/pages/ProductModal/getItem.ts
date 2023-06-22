import { getFetcher } from "@/lib/httpClient";

type Props = {
  id: string;
};

type ProductData = {
  product: {
    imageUrl: string;
    name: string;
    price: number;
  };
};

export async function getItem({ id }: Props): Promise<ProductData> {
  const data = await getFetcher<ProductData>(`/api/v1/products/${id}`);
  return data;
}
