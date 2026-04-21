import { cleanInput } from "./repl.js";
import { describe, test, expect } from "vitest";


describe.each([
  {
    input: "  hello  world  ",
    expected: ["hello", "world"],
  },
  {
    input: "one",
    expected: ["one"],
  },
  {
    input: "",
    expected: [],
  }, 
  {
    input: "hello   world   Boots",
    expected: ["hello", "world", "Boots"],
  },
])("cleanInput", ({ input, expected }) => {
  test(`splits "${input}" into ${JSON.stringify(expected)}`, () => {
    expect(cleanInput(input)).toEqual(expected);
  });
});