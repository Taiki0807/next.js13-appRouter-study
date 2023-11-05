import { getByText, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TestPage from "../app/test/page";

describe("Test Page - Rendering", () => {
  describe("rendering", () => {
    it("should have test Page text", () => {
      render(<TestPage />);
      expect(screen.getByText("page")).toBeInTheDocument();
    });
    it("should have button with text click me", () => {
      render(<TestPage />);
      screen.getByRole("button", { name: "click me" });
    });
    it("should have input field with label Enter rondom text", () => {
      render(<TestPage />);
      expect(screen.getByLabelText(/enter random text/)).toBeInTheDocument();
    });
    it("should find input field by placeholder text enter", () => {
      render(<TestPage />);
      screen.getByPlaceholderText(/enter/);
    });
    it("should not find element with text", () => {
      render(<TestPage />);
      expect(screen.queryByText("text")).not.toBeInTheDocument();
    });
  });
  describe("Behavior", () => {
    it("should click on show text button and find text", async () => {
      render(<TestPage />);
      expect(screen.queryByText("hello world!!")).not.toBeInTheDocument();
      const showTextButton = screen.getByRole("button", { name: "show text" });
      await userEvent.click(showTextButton);
      expect(screen.getByText("hello world!!")).toBeInTheDocument();
    });
  });
});
