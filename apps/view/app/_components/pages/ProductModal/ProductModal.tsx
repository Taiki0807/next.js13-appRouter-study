import Image from "next/image";

import { Dialog, DialogContent, DialogDescription, DialogHeader } from "@/app/_components/parts/";

import { getItem } from "./getItem";

type Props = {
  id: string;
};

export const ProductModal = async ({ id }: Props) => {
  const data = await getItem({ id });
  return (
    <div>
      <Dialog open={true}>
        <DialogContent className="sm:px-10 sm:py-8">
          <DialogHeader>
            <DialogDescription className="flex flex-col items-center justify-center">
              <div className="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full cursor-pointer overflow-hidden rounded-lg bg-slate-200 ring ring-gray-100 ring-offset-4 hover:ring-gray-300">
                <Image
                  width={500}
                  height={500}
                  src={data.product.imageUrl}
                  alt={data.product.name}
                  className="object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="mt-6 text-3xl font-bold text-gray-700">{data.product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{data.product.price} 円</p>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
