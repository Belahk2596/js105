let number = 0;
while (true) { //while loop
  number++;
  console.log(number);
  if (number >= 10) { //if number is greater than 10 stop(using break)
    break;
  }
};
let numbers = [1, 2, 3]; //initialise an arrray
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

