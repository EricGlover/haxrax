const JourneyToTheMoon = require("../index");
describe("journey to the moon", () => {
  let journeyToTheMoon;

  beforeEach(function() {
    journeyToTheMoon = new JourneyToTheMoon("dank");
  });

  it("correctly handles case 1", () => {
    let case1 = `5 3
0 1
2 3
0 4`;
    const result = journeyToTheMoon.numberOfPairs(case1);
    expect(result).toBe(6);
  });
  it("correctly handles case 2", () => {
    let case2 = `4 1
0 2`;
    const result = journeyToTheMoon.numberOfPairs(case2);
    expect(result).toBe(5);
  });
  it("correctly handles test 3", () => {
    let { test3, answer3 } = require("../tests/3");
    const result = journeyToTheMoon.numberOfPairs(test3);
    expect(result).toEqual(answer3);
  });

  xdescribe("conversion from string to numbers", () => {
    it("returns an array of numbers", () => {
      let result = journeyToTheMoon.convertStringToNum("1");
      expect(result).toEqual([1]);
    });
    it("handles multiple inputs", () => {
      let result = journeyToTheMoon.convertStringToNum("1 1");
      expect(result).toEqual([1, 1]);
    });
    it("ignores non-digits", () => {
      let result = journeyToTheMoon.convertStringToNum("1 \n 1");
      expect(result).toEqual([1, 1]);
    });
    it("correctly hadnles 111", () => {
      let result = journeyToTheMoon.convertStringToNum("111");
      expect(result).toEqual([111]);
    });
    it("correctly handles the format we expect", () => {
      let case1 = `5 3
      0 1
      2 3
      0 4`;
      let result = journeyToTheMoon.convertStringToNum(case1);
      expect(result).toEqual([5, 3, 0, 1, 2, 3, 0, 4]);
    });
  });

  xdescribe("checks an array of arrays for an element", () => {
    it("finds 1 in [[1]], at index = 0", () => {
      expect(journeyToTheMoon.checkTree([[1]], 1)).toBe(0);
    });
    it("it fails appropriately to find things that aren't there", () => {
      expect(journeyToTheMoon.checkTree([[1], [2], [1, 1, 3, 7, 9]], 111)).toBe(
        false
      );
    });
    it("finds 1 in [[1]]", () => {
      expect(journeyToTheMoon.checkTree([[1], [2], [1, 1, 3, 7, 9]], 3)).toBe(
        2
      );
    });
    it("nested array test 1", () => {
      expect(journeyToTheMoon.checkTree([[0, 1], [2, 3]], 0)).toBe(0);
    });
    it("nested array test 2", () => {
      expect(journeyToTheMoon.checkTree([[0, 1], [2, 3]], 4)).toBe(false);
    });
  });
});
