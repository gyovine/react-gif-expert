import { getGifs } from "../../src/helpers/getGifs";

describe("Prueba en getGifs", () => {
  test("debe retornar un array de gifs", async () => {
    const gifs = await getGifs("Dragon Ball");
    expect(gifs[0]).toEqual({
      title: expect.any(String),
      id: expect.any(String),
      url: expect.any(String),
    });
  });
});
