function calculateRectangleArea(length, height){
  return (length > 0 && height > 0) ? length * height : undefined;
}

function calculateTriangleArea(base, height){
  return (base > 0 && height > 0) ? 0.5 * base * height : undefined;
}

function calculateCircleArea(radius){
  return (radius > 0) ? Math.PI * Math.pow(radius,2) : undefined;
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
