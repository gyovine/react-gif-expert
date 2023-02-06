import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Prueba snap", () => {
  const title = "chicken";
  const url = "https://www.ricken.com/";
  test("prueba con prop-types", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
  test("los titles y las img deben coincidir", () => {
    render(<GifItem title={title} url={url} />);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
    screen.debug();
  });
});
