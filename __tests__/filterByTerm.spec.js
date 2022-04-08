const filterByTerm = require("../src/filterByTerm");

describe("Filter function", () => {
  const input = [
    { id: 1, url: "https://www.url1.dev" },
    { id: 2, url: "https://www.url2.dev" },
    { id: 3, url: "https://www.link3.dev" }
  ];

  const output = [{ id: 3, url: "https://www.link3.dev" }];

  const urlOutput = [
    { id: 1, url: "https://www.url1.dev" },
    { id: 2, url: "https://www.url2.dev" },
  ];

  test("it should filter by a search term (link)", () => {
    // actual test
    expect(filterByTerm(input, "link")).toEqual(output);

    // New Test Uppercase
    expect(filterByTerm(input, "LINK")).toEqual(output);
  });

  test("it should filter by a search term (uRl)", () => {
    expect(filterByTerm(input, "uRl")).toEqual(urlOutput);
  });

  test("it should not return anything on an empty search term", () => {
    expect(filterByTerm(input, "")).toEqual([]);
  });
});

