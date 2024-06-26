/* eslint-disable no-undef */
test("test toBe", () => {
  const name = "kunto";
  const greet = `hello, ${name}`;

  expect(greet).toBe("hello, kunto");
});

test("test toEqual", () => {
  let person = { id: 111 };
  Object.assign(person, { name: "kunto" });

  expect(person).toEqual({ id: 111, name: "kunto" });
});
