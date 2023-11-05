import Shop from "../_components/pages/Shop/Shop";

const page = () => {
  return (
    <div>
      {/* @ts-expect-error Async Server Component */}
      <Shop />
    </div>
  );
};

export default page;
