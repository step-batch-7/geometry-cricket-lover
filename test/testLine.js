const assert = require("chai").assert;
const Line = require("../src/line");
const Point = require("../src/point");

describe("Line", function() {
  describe("toString", function() {
    it("should give the string representation of line object", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 2, y: 3 });
      const expected = "[Line (1,2) to (2,3)]";
      assert.strictEqual(line.toString(), expected);
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
    it("should give false for two lines of different instances", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = { pointA: { x: 1, y: 2 }, pointB: { x: 3, y: 4 } };
      assert.isFalse(line1.isEqualTo(line2));
    });
  });
  describe("length", function() {
    it("should give the length of the line when two positive points are given", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 5, y: 1 });
      const expected = 4;
      assert.strictEqual(line.length, expected);
    });
    it("should give the length of the line when two negative points are given", function() {
      const line = new Line({ x: -1, y: -1 }, { x: -5, y: -1 });
      const expected = 4;
      assert.strictEqual(line.length, expected);
    });
    it("should give the length of the line when one positive and one negative point is given", function() {
      const line = new Line({ x: -1, y: 1 }, { x: 5, y: 1 });
      const expected = 6;
      assert.strictEqual(line.length, expected);
    });
  });
  describe("isParallelTo", function() {
    it("should validate when given two lines are parallel", function() {
      const line1 = new Line({ x: 1, y: 1 }, { x: 3, y: 3 });
      const line2 = new Line({ x: 2, y: 1 }, { x: 6, y: 5 });
      assert.isTrue(line1.isParallelTo(line2));
    });
    it("should not validate when given two lines are not parallel", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 3 });
      const line2 = new Line({ x: 2, y: 3 }, { x: 5, y: 6 });
      assert.isFalse(line1.isParallelTo(line2));
    });
    it("should not validate when given two lines are collinear", function() {
      const line1 = new Line({ x: 1, y: 1 }, { x: 4, y: 4 });
      const line2 = new Line({ x: 3, y: 3 }, { x: 6, y: 6 });
      assert.isFalse(line1.isParallelTo(line2));
    });
    it("should not validate when given two lines are equal", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 4, y: 10 });
      const line2 = new Line({ x: 1, y: 2 }, { x: 4, y: 10 });
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
  describe("split", function() {
    it("should split the given line into two equal halves", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 2, y: 3 });
      const line1 = new Line({ x: 1, y: 2 }, { x: 1.5, y: 2.5 });
      const line2 = new Line({ x: 1.5, y: 2.5 }, { x: 2, y: 3 });
      const actual = line.split();

      assert.isOk(line1.isEqualTo(actual[0]));
      assert.isOk(line2.isEqualTo(actual[1]));
    });
  });
  describe("instanceOf", function() {
    it("should validate if given line is instance of Line class", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 2, y: 3 });
      assert.isOk(line instanceof Line);
    });
  });
  describe("hasPoint", function() {
    it("should validate if the given point is present on the line", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 2, y: 3 });
      const point = new Point(1.5, 2.5);
      const actual = line.hasPoint(point);
      assert.isTrue(actual);
    });
    it("should validate if the given point is present on the line", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 2, y: 3 });
      const point = new Point(1.5, 2);
      const actual = line.hasPoint(point);
      assert.isFalse(actual);
    });
  });
  describe("findX", function() {
    it("should give the corresponding x for given y inside the line", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 2, y: 3 });
      const expected = 1.5;
      assert.strictEqual(line.findX(2.5), expected);
    });
    it("should give the NaN for given y outside the line", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      assert.isNaN(line.findX(6));
    });
  });
  describe("findY", function() {
    it("should give the corresponding y for given x on the line", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 2, y: 3 });
      const expected = 2.5;
      assert.strictEqual(line.findY(1.5), expected);
    });
    it("should give the NaN for given x outside the line", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      assert.isNaN(line.findY(6));
    });
  });
  describe("findPointFromStart", function() {
    it("should give a point on the line with a given distance from start", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 6, y: 1 });
      const expected = new Point(3, 1);
      const actual = line.findPointFromStart(2);
      assert.isOk(actual.isEqualTo(expected));
    });
    it("should give a point on the line with a given distance from start", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 6, y: 1 });
      const expected = NaN;
      const actual = line.findPointFromStart(7);
      assert.deepStrictEqual(actual, expected);
    });
  });
  describe("findPointFromEnd", function() {
    it("should give a point on the line with a given distance from end", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 5, y: 1 });
      const expected = new Point(3, 1);
      const actual = line.findPointFromEnd(2);
      assert.isOk(actual.isEqualTo(expected));
    });
    it("should give a point on the line with a given distance from end", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 5, y: 1 });
      const expected = NaN;
      const actual = line.findPointFromEnd(7);
      assert.deepStrictEqual(actual, expected);
    });
  });
});
