let number = 0;

while (true) {
  number++;
  console.log(number);
  if (number >= 10) {
    break;
  }
};
let numbers = [1, 2, 3];
let total = 0;
console.log('line-break')
numbers.forEach(x => {
    console.log(x);
});
numbers.forEach(number => {
    total += number;
});
console.log('line-break')
console.log(total);

