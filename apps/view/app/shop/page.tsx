import { ProductCard } from "../_components/features";

const page = () => {
  return (
    <div className="container max-w-2xl sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">item</h2>
      <ProductCard />
    </div>
  );
};

export default page;
