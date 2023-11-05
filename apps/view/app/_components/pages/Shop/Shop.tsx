import { ProductCard } from "@/app/_components/features";

import { getProducts } from "../../features/Card/productCard/getProducts";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const Shop = async () => {
  //throw new Error("cloud not retrive the product");
  await sleep(5000);
  const data = await getProducts();
  return (
    <div className="container max-w-2xl sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Intercepting Routes along with Parallel routes
      </h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {data.products.map((product: any) => (
          <ProductCard key={product.id} id={product.id} name={product.name} imageURL={product.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
