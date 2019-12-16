const assert = require("chai").assert;
const Line = require("../src/line");

describe("Line", function() {
  describe("toString", function() {
    it("should give the string representation of line object", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 2, y: 3 });
      const expected = "[Line (1,2) to (2,3)]";
      const actual = line.toString();
      assert.deepStrictEqual(expected, actual);
    });
  });
});
