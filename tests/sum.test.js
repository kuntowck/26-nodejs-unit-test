/* eslint-disable no-undef */
import { sum } from "../src/sum";

test("sum", () => {
  const result = sum(1, 2);

  expect(result).toBe(3);
});

test("sum 1", () => {
  const result = sum(2, 2);

  expect(result).toBe(4);
});
