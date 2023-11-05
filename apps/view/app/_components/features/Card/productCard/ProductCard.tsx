import Link from "next/link";

type Props = {
  id: string;
  imageURL: string;
  name: string;
};

export const ProductCard = ({ id, imageURL, name }: Props) => {
  return (
    <div key={id} className="group relative">
      <Link href={`/product/${id}`}>
        <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
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
  );
};
