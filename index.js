const conditionIsTrue = (name) => { // return true if 'Bob' function
    if (name == 'Bob') {
      return true;
}  else {
    return false;
}
}
console.log(conditionIsTrue('Bob')); //console log function 

const incrementer  = (number) => { //increment by 1 function
   return number += 1;
}
console.log(incrementer(99));

const string = "hello";
const stringArray = string.split('');  //split string characters into array
console.log(stringArray); 
console.log(stringArray[2]); //array indexing, prints L

const numbersArray = [1, 2, 3, 4]; 
numbersArray.push(5); //pushing 5 to the end of the array
console.log(numbersArray);  
numbersArray.pop(); //pop pushed value
console.log(numbersArray);
numbersArray.unshift('poo') //add value to begging of array
console.log(numbersArray);
numbersArray.shift(); //remove added value from begging of array
console.log(numbersArray);

const iteratorArray = ['Bob','John','Rob','Tom','Ron','Don','Ren','Ten','Ben','Pen',]

iteratorArray.forEach(iteratorArray => {
    console.log(iteratorArray); //forEach function
});
console.log(" line break") 
function print(iteratorArray) { //for of loop
    for (const name of iteratorArray) { 
        console.log(name);
    }
}
print(iteratorArray);
console.log('line break');
function printArray() { //for loop
    for(let i = 0; i < iteratorArray.length; i++) {
    console.log(iteratorArray[i]);
    }
}
printArray();
console.log('line break');
function whileLoop() {
let i = 0;
while (i < iteratorArray.length) { //while loop
    console.log(iteratorArray[i]);
    i++;
};
}
whileLoop();
console.log('line break');
function doWhile() {
    let i = 0;
do {
    console.log(iteratorArray[i]);
    i++;
} while (i < iteratorArray.length);
};
doWhile();
const numbers = [1, 2, 3];
const newNumbers = numbers.map(x => x * 2); //using map method to double elements
console.log(newNumbers);
const numbersTwo = [1, 2, 3];
function checkNum(num) { 
    return num >= 2;
}
const result = numbersTwo.filter(checkNum); //using the filter method to return a new array with condition
console.log(result);
