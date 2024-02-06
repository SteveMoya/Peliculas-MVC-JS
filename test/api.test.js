import { describe, expect, it } from "vitest";
import { validateMovie } from "../schemas/movies";

describe("Test", () => {
     //GIVEN
    //Colocar los datos de entrada
    const input = {
        title: "Matrix",
        year: 1999,
        director: "Lana Wachowski",
        duration: 136,
        rate: 8.7,
        poster: "https://www.google.com",
        genre: ["Action", "Sci-Fi"]
    };
    //When
    //Colocar la función a testear
    const result = validateMovie(input);
    //Then
    //Colocar el resultado esperado
    it("should return success", () => {
        expect(result.success).toBe(true);
    })

    it.skip("should return success", () => {
        expect(result.success).toBe(true);
    })


});