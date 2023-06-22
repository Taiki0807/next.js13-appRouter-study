import { ProductModal } from "@/app/_components/pages";

type Props = {
  params: { id: string };
};
const page = async ({ params }: Props) => {
  const productModalElement = await ProductModal({ id: params.id });
  return <div>{productModalElement}</div>;
};

export default page;
