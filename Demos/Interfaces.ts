﻿module Interfaces {
  interface Shape {
    getArea(): number;
  }

  class Circle implements Shape {
    constructor(public radius: number) { }
    getArea() { return Math.PI * Math.pow(this.radius, 2); }
  }

  export function RunDemo() {
    var c = new Circle(1);

    var result = "The circle's radius is " + c.radius + "<br />";
    result += "The circle's area is " + c.getArea();
    return result;
  }
} 