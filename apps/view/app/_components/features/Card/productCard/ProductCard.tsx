import Link from "next/link";

type Props = {
  id: string;
  imageURL: string;
  name: string;
  key?: string;
};

export const ProductCard = ({ id, imageURL, name, key }: Props) => {
  return (
    <div key={key} className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <div key={id} className="group relative">
        <Link href={`/product/${id}`}>
          <div className="lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
            <img src={imageURL} alt="image" className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
          </div>
          <div className="mt-4 flex justify-between">
            <h3 className="text-sm text-gray-700">
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};
