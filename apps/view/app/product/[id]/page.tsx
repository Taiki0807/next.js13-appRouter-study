import { ProductPage } from "@/app/_components/pages";

type Props = {
  params: { id: string };
};
const Page = async ({ params }: Props) => {
  const productPageElement = await ProductPage({ id: params.id });
  return <div>{productPageElement}</div>;
};

export default Page;
