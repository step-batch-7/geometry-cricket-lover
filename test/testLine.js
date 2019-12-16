const assert = require("chai").assert;
const Line = require("../src/line");

describe("Line", function() {
  describe("toString", function() {
    it("should give the string representation of line object", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 2, y: 3 });
      const expected = "[Line (1,2) to (2,3)]";
      assert.deepStrictEqual(line.toString(), expected);
    });
  });
  describe("isEqualTo", function() {
    it("should validate when given two lines are equal", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 2, y: 3 });
      const line2 = new Line({ x: 1, y: 2 }, { x: 2, y: 3 });
      //const expected = true;
      assert.isTrue(line1.isEqualTo(line2));
    });
    it("should not validate when given two lines are not equal", function() {
      const line1 = new Line({ x: 1, y: 1 }, { x: 2, y: 3 });
      const line2 = new Line({ x: 1, y: 2 }, { x: 2, y: 3 });
      //const expected = true;
      assert.isTrue(line1.isEqualTo(line2));
    });
  });
});
