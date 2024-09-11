const arr = [5, 8, 12, 20, 1, 0, 4];
const greaterThan = 10;
const greaterThanGreat = arr.find(number =>
    number > greaterThan);
console.log(greaterThanGreat);
arr.reverse();
console.log(arr);
arr.sort((a, b) => a - b); //Compare Function: The compare function (a, b) => a - b ensures numerical sorting. It compares two numbers:
console.log(arr);
arr.sort((a, b) => b - a); //descending order
console.log(arr);
const positiveNumbers = arr.every(number => number > 0); //numbers.every(number => number > 0); applies the every method to the numbers array.
console.log(positiveNumbers);
const sum = arr.reduce((accumulator, currentValue) => { 
    return accumulator + currentValue;
});
console.log(sum)
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const newArray = array1.concat(array2); 
console.log(newArray);

