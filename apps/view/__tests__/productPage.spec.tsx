import { render } from "@testing-library/react";

import Shop from "@/app/_components/pages/Shop/Shop";

describe("product page -Rendering", () => {
  it("should have the text", async () => {
    await render(<Shop />);
  });
});
