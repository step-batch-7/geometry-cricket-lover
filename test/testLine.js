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
      assert.isTrue(line1.isEqualTo(line2));
    });
    it("should not validate when given two lines are not equal", function() {
      const line1 = new Line({ x: 1, y: 1 }, { x: 2, y: 3 });
      const line2 = new Line({ x: 1, y: 2 }, { x: 2, y: 3 });
      assert.isFalse(line1.isEqualTo(line2));
    });
  });
  describe("length", function() {
    it("should give the length of the line with the given two points", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 2, y: 3 });
      const expected = Math.sqrt(5);
      assert.strictEqual(line.length(), expected);
    });
  });
  describe("isParallelTo", function() {
    it("should validate when given two lines are parallel", function() {
      const line1 = new Line({ x: 1, y: 1 }, { x: 3, y: 3 });
      const line2 = new Line({ x: 4, y: 4 }, { x: 6, y: 6 });
      assert.isTrue(line1.isParallelTo(line2));
    });
    it("should validate when given two lines are parallel", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 3 });
      const line2 = new Line({ x: 4, y: 4 }, { x: 6, y: 6 });
      assert.isFalse(line1.isParallelTo(line2));
    });
  });
  describe("slope", function() {
    it("should give the slope for the given line", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 2, y: 3 });
      const expected = 2;
      assert.strictEqual(line.slope, expected);
    });
  });
});
