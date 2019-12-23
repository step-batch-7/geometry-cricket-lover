const assert = require("chai").assert;
const Point = require("../src/point");
const Rectangle = require("../src/rectangle");

describe("rectangle", function() {
  describe("toString", function() {
    it("should give the string representation of rectangle object", function() {
      const rectangle = new Rectangle({ x: 1, y: 2 }, { x: 2, y: 3 });
      const expected = "[Rectangle (1,2) to (2,3)]";
      assert.strictEqual(rectangle.toString(), expected);
    });
  });
  describe("area", function() {
    it("should give the area of given rectangle", function() {
      const rectangle = new Rectangle({ x: 0, y: 4 }, { x: 6, y: 0 });
      assert.strictEqual(rectangle.area, 24);
    });
  });
  describe("perimeter", function() {
    it("should give the perimeter of given rectangle", function() {
      const rectangle = new Rectangle({ x: 0, y: 4 }, { x: 6, y: 0 });
      assert.strictEqual(rectangle.perimeter, 20);
    });
  });
  describe("isEqualTo", function() {
    it("should validate when given two rectangles are equal", function() {
      const rectangle1 = new Rectangle({ x: 0, y: 4 }, { x: 6, y: 0 });
      const rectangle2 = new Rectangle({ x: 0, y: 4 }, { x: 6, y: 0 });
      assert.isTrue(rectangle1.isEqualTo(rectangle2));
    });
    it("should validate when given two rectangles are equal and diagonals are given in reverse order", function() {
      const rectangle1 = new Rectangle({ x: 0, y: 4 }, { x: 6, y: 0 });
      const rectangle2 = new Rectangle({ x: 6, y: 0 }, { x: 0, y: 4 });
      assert.isTrue(rectangle1.isEqualTo(rectangle2));
    });
    it("should not validate when the given rectangles are not equal", function() {
      const rectangle1 = new Rectangle({ x: 0, y: 4 }, { x: 6, y: 0 });
      const rectangle2 = new Rectangle({ x: 0, y: 1 }, { x: 2, y: 5 });
      assert.isFalse(rectangle1.isEqualTo(rectangle2));
    });
    it("should not validate for two rectangles of different instances", function() {
      const rectangle1 = new Rectangle({ x: 1, y: 2 }, { x: 3, y: 4 });
      const rectangle2 = { endA: { x: 1, y: 2 }, endB: { x: 3, y: 4 } };
      assert.isFalse(rectangle1.isEqualTo(rectangle2));
    });
  });
  describe("hasPoint", function() {
    it("should validate when the given point is on any of line of the rectangle", function() {
      const rectangle = new Rectangle({ x: 0, y: 4 }, { x: 6, y: 0 });
      const point1 = new Point(2, 0);
      const point2 = new Point(0, 2);
      const point3 = new Point(6, 3);
      const point4 = new Point(3, 4);
      assert.isTrue(rectangle.hasPoint(point1));
      assert.isTrue(rectangle.hasPoint(point2));
      assert.isTrue(rectangle.hasPoint(point3));
      assert.isTrue(rectangle.hasPoint(point4));
    });
    it("should invalidate when the given point is not on any line of the rectangle", function() {
      const rectangle = new Rectangle({ x: 0, y: 4 }, { x: 6, y: 0 });
      const point = new Point(2, 3);
      assert.isFalse(rectangle.hasPoint(point));
    });
    it("should invalidate when the given point is not of same instance", function() {
      const rectangle = new Rectangle({ x: 0, y: 4 }, { x: 6, y: 0 });
      const point = { x: 0, y: 0 };
    });
  });
  describe.only("covers", function() {
    it("should validate when a given point inside the rectangle", function() {
      const rectangle = new Rectangle({ x: 0, y: 4 }, { x: 6, y: 0 });
      const point = new Point(2, 3);
      assert.isTrue(rectangle.covers(point));
    });
    it("should not validate when a given point inside the rectangle", function() {
      const rectangle = new Rectangle({ x: 0, y: 4 }, { x: 6, y: 0 });
      const point = new Point(0, -1);
      assert.isFalse(rectangle.covers(point));
    });
  });
});
