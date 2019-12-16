const assert = require("chai").assert;
const Point = require("../src/point");

describe("Point", function() {
  describe("toString", function() {
    it("should give the string representation of point object", function() {
      const point = new Point(2, 3);
      const expected = "[Point @(2,3)]";
      assert.strictEqual(point.toString(), expected);
    });
  });
  describe("visit", function() {
    it("should perform the given operation on the coordinates of a point", function() {
      const point = new Point(2, 3);
      const expected = 5;
      assert.strictEqual(
        point.visit((x, y) => x + y),
        expected
      );
    });
    it("should perform the given operation on the coordinates of a point", function() {
      const point = new Point(2, 3);
      const expected = 6;
      assert.strictEqual(
        point.visit((x, y) => x * y),
        expected
      );
    });
  });
});
