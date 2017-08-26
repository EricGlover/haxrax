const stringReducer = require("./reduced-string");
describe("string-reducer", () => {
  //done() ??
  it("correctly reduces", () => {
    let result = stringReducer.super_reduced_string("aaabccddd");
    expect(result).toBe("abd");
  });
  it("correctly handles empty ", () => {
    let result = stringReducer.super_reduced_string("baab");
    expect(result).toBe("Empty String");
  });
  it("correctly handles empty string cases ", () => {
    let result = stringReducer.super_reduced_string("aa");
    expect(result).toBe("Empty String");
  });
});
