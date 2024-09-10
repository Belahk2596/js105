const conditionIsTrue = (name) => { // return true if 'Bob' function
    if (name == 'Bob') {
      return true;
}  else {
    return false;
}
}
console.log(conditionIsTrue('Bob')); //increment by 1 function

const incrementer  = (number) => {
   return number + 1;
}
console.log(incrementer(99));

const string = "hello";
const stringArray = string.split('');  //split string characters into array
console.log(stringArray); 
console.log(stringArray[2]); //array indexing

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
function printArray() {
    for(let i = 0; i < iteratorArray.length; i++) {
    console.log(iteratorArray[i]);
    }
}
printArray();