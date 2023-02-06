import { screen, fireEvent, render } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("probando el componente <Addcateregory />", () => {
  test("input", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "Saitama" } });
    expect(input.value).toBe("Saitama");
    screen.debug;
  });
  test("submit y form", () => {
    const inputValue = "Saitama";
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    expect(onNewCategory).toBeCalled();
    expect(onNewCategory).toBeCalledTimes(1);
    expect(onNewCategory).toBeCalledWith(inputValue);
  });
  test("que nunca dispare el form", () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.submit(form);
    expect(onNewCategory).not.toBeCalled();
    expect(onNewCategory).toBeCalledTimes(0);
  });
});
