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
    it("should perform the add operation on the coordinates of a point", function() {
      const point = new Point(2, 3);
      const expected = 5;
      assert.strictEqual(
        point.visit((x, y) => x + y),
        expected
      );
    });
    it("should perform the multiply operation on the coordinates of a point", function() {
      const point = new Point(2, 3);
      const expected = 6;
      assert.strictEqual(
        point.visit((x, y) => x * y),
        expected
      );
    });
  });
  describe("isEqualTo", function() {
    it("should validate when the the given points have same x and y coordinates", function() {
      const point1 = new Point(2, 3);
      const point2 = new Point(2, 3);
      assert.isTrue(point1.isEqualTo(point2));
    });
    it("should not validate when the the given points do not have same x and y coordinates", function() {
      const point1 = new Point(3, 2);
      const point2 = new Point(2, 3);
      assert.isFalse(point1.isEqualTo(point2));
    });
  });
  describe("clone", function() {
    it("should create a copy and give back the same point given to it", function() {
      const point = new Point(2, 3);
      assert.isOk(point.isEqualTo(point.clone()));
    });
  });
});
