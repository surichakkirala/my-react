import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load ContactUs Component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  //Assertion
  expect(heading).toBeInTheDocument();
});

test("Should load button inside ContactUs Component", () => {
  render(<Contact />);
  // const button = screen.getByRole("button");
  const button = screen.getByText("Submit");
  //Assertion
  expect(button).toBeInTheDocument();
});

test("Should load input name inside ContactUs Component", () => {
  render(<Contact />);
  // const button = screen.getByRole("button");
  const input = screen.getByPlaceholderText("Name");
  //Assertion
  expect(input).toBeInTheDocument();
});

test("Should load all input boxes inside ContactUs Component", () => {
  render(<Contact />);
  // Querying
  // whenver there are multiple items use getAll
  const inputBoxes = screen.getAllByRole("textbox");
  //   inputBoxes is an array which holds react elements
  //Assertion
  expect(inputBoxes.length).toBe(2);
});
