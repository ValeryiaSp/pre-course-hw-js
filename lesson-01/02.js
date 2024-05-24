let number1 = Math.floor(Math.random() * 100);

function isOddModulus(number1) {
  if (number1 % 2 === 1) {
    return number1 + " : Это нечетное число";
  }
  return number1 + " : Это четное число";
};

console.log(isOddModulus(number1));