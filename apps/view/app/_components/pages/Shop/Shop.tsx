import { ProductCard } from "@/app/_components/features";

import { getProducts } from "./getProducts";

const Shop = async () => {
  const data = await getProducts();
  return (
    <div className="container max-w-2xl sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Intercepting Routes along with Parallel routes
      </h2>
      {data.products.map((product: any) => (
        <ProductCard key={product.id} id={product.id} name={product.name} imageURL={product.image} />
      ))}
    </div>
  );
};

export default Shop;
