const assert = require("chai").assert;
const Point = require("../src/point");
const Circle = require("../src/circle");

describe("Circle", function() {
  describe("toString", function() {
    it("should give the string representation of circle object", function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      const expected = "[Circle @(1,2) radius 5]";
      assert.strictEqual(circle.toString(), expected);
    });
  });
  describe("isEqualTo", function() {
    it("should validate when the the given circles are at same location and of same size", function() {
      const circle1 = new Circle({ x: 0, y: 0 }, 5);
      const circle2 = new Circle({ x: 0, y: 0 }, 5);
      assert.isTrue(circle1.isEqualTo(circle2));
    });
    it("should not validate when the the given circles are at same location but not of same size", function() {
      const circle1 = new Circle({ x: 3, y: 2 }, 5);
      const circle2 = new Circle({ x: 3, y: 2 }, 4);
      assert.isFalse(circle1.isEqualTo(circle2));
    });
    it("should not validate when the the given circles are not at same location but of same size", function() {
      const circle1 = new Circle({ x: 2, y: 3 }, 5);
      const circle2 = new Circle({ x: 3, y: 2 }, 5);
      assert.isFalse(circle1.isEqualTo(circle2));
    });
    it("should not validate for circles of different instance", function() {
      const circle1 = new Circle({ x: 0, y: 0 }, 5);
      const circle2 = ({ x: 4, y: 5 }, 5);
      assert.isFalse(circle1.isEqualTo(circle2));
    });
  });
  describe("area", function() {
    it("should give the area of given circle", function() {
      const circle = new Circle({ x: 2, y: 3 }, 7);
      assert.approximately(circle.area, 154, 0.1);
    });
    it("should give 0 as area for circle of radius zero", function() {
      const circle = new Circle({ x: 2, y: 3 }, 0);
      assert.strictEqual(circle.area, 0);
    });
  });
  describe("perimeter", function() {
    it("should give the perimeter of given circle", function() {
      const circle = new Circle({ x: 2, y: 3 }, 7);
      assert.approximately(circle.perimeter, 44, 0.1);
    });
    it("should give 0 as perimeter for circle of radius zero", function() {
      const circle = new Circle({ x: 2, y: 3 }, 0);
      assert.strictEqual(circle.perimeter, 0);
    });
  });
  describe("hasPoint", function() {
    it("should validate if the given point is present on the circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const point = new Point(-5, 0);
      const actual = circle.hasPoint(point);
      assert.isTrue(actual);
    });
    it("should not validate if the given point is not present on the circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const point = new Point(2, 3);
      const actual = circle.hasPoint(point);
      assert.isFalse(actual);
    });
    it("should not validate if the given point is of different instance", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const point = { x: -5, y: 0 };
      const actual = circle.hasPoint(point);
      assert.isFalse(actual);
    });
  });
  describe("moveTo", function() {
    it("should give a new circle of same dimensions at given point", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const expected = new Circle({ x: 2, y: 3 }, 5);
      const actual = circle.moveTo({ x: 2, y: 3 });
      assert.isOk(expected.isEqualTo(actual));
    });
  });
});
