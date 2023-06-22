import { ProductCard } from "@/app/_components/features";

const page = async () => {
  const productCardElement = await ProductCard();
  return (
    <div className="container max-w-2xl sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Intercepting Routes along with Parallel routes
      </h2>
      {productCardElement}
    </div>
  );
};

export default page;
