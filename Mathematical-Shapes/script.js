//  Write a JavaScript program to find the diagonal of a square where the length of each side is 9.

function getSquareDiagonal(s) {
  return Number((Math.sqrt(2) * s).toFixed());
}

getSquareDiagonal(9);

// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6 and 7.
function getTriangleArea(a, b, c) {
  const s = (a + b + c) / 2;
  return Number(Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed());
}
getTriangleArea(5, 6, 7);

//Write a JavaScript program to find the circumference and surface area of a circle whose radius is 4.
function getSurfaceAreaOfCircumference(r) {
  return Number((2 * Math.PI * r).toFixed(2));
}
getSurfaceAreaOfCircumference(4);
