let number1 = Math.floor(Math.random() * 100);

function isOddModulus(num) {
  if (num % 2 === 1) {
    return num + " : Это нечетное число";
  }
  return num + " : Это четное число";
};

console.log(isOddModulus(number1));