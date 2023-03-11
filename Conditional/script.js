function getLargerNumber(a, b) {
  //   if (a > b) return a;
  //   else return b;
  if (!Number.isInteger(a && b)) return `Please enter a valid input`;
  return a > b ? a : b;
}
getLargerNumber(10, 12);

function checkEvenOrOdd(n) {
  if (!Number.isInteger(n)) return `Please enter a valid input`;
  return n % 2 === 0 ? "The Number is even" : "The Number is Odd";
}
checkEvenOrOdd(12);
