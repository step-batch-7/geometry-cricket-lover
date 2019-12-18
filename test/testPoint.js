const assert = require("chai").assert;
const Point = require("../src/point");
const Line = require("../src/line");
const Circle = require("../src/circle");

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
    it("should give false for equal points of different instance", function() {
      const point1 = new Point(4, 5);
      const point2 = { x: 4, y: 5 };
      assert.isFalse(point1.isEqualTo(point2));
    });
  });
  describe("clone", function() {
    it("should create a copy and give back the same point given to it", function() {
      const point = new Point(2, 3);
      assert.isOk(point.isEqualTo(point.clone()));
    });
  });
  describe("isOn", function() {
    it("should validate if the point is present on the given line", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 2, y: 3 });
      const point = new Point(2, 3);
      assert.isTrue(point.isOn(line));
    });
    it("should not validate if the point is not present on the given line", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 2, y: 3 });
      const point = new Point(2, 4);
      assert.isFalse(point.isOn(line));
    });
    it("should validate if the pont is on circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const point = new Point(-5, 0);
      assert.isTrue(point.isOn(circle));
    });
    it("should validate if the pont is on circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const point = new Point(2, 3);
      assert.isFalse(point.isOn(circle));
    });
  });
  describe("findDistanceTo", function() {
    it("should give the distance between the given two points", function() {
      const point1 = new Point(1, 1);
      const point2 = new Point(4, 1);
      const expected = 3;
      assert.strictEqual(point1.findDistanceTo(point2), expected);
    });
    it("should give the distance between the given two points", function() {
      const point1 = new Point(2, 3);
      const point2 = new Point(2, 3);
      const expected = 0;
      assert.strictEqual(point1.findDistanceTo(point2), expected);
    });
    it("should give the NaN when given point is not an instance of point class", function() {
      const point1 = new Point(1, 1);
      const point2 = { x: 4, y: 2 };
      assert.isNaN(point1.findDistanceTo(point2));
    });
  });
});
