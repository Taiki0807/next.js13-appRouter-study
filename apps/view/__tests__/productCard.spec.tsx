import { render, screen } from "@testing-library/react";

import { ProductCard } from "../app/_components/features/Card/productCard";

test("ProductCard renders correctly", () => {
  const id = "1";
  const imageURL = "https://example.com/image.jpg";
  const name = "Test Product";

  render(<ProductCard id={id} imageURL={imageURL} name={name} />);

  const nameElement = screen.getByText(name);
  expect(nameElement).toBeInTheDocument();

  const imageElement = screen.getByAltText("image");
  expect(imageElement).toHaveAttribute("src", imageURL);
});
