import Shop from "../_components/pages/Shop/Shop";

const page = async () => {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <Shop />
    </div>
  );
};

export default page;
