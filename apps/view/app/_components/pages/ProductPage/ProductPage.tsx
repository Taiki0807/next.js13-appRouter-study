import { getItem } from "../ProductModal/getItem";

type Props = {
  id: string;
};
export const ProductPage = async ({ id }: Props) => {
  const data = await getItem({ id });
  return (
    <div className="group container block">
      <div className="relative h-[350px] sm:h-[450px]">
        <img src={data.product.imageUrl} alt="" className="absolute inset-0 h-full w-full object-cover opacity-100 " />
      </div>

      <div className="relative bg-white pt-3">
        <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
          Limited Edition Sports Trainer
        </h3>

        <p className="mt-1.5 tracking-wide text-gray-900">$189.99</p>
      </div>
    </div>
  );
};
