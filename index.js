// Q1)Rewrite the following function as an arrow function:

	// function greet(name) {
	//   return `Hello, ${name}!`;
	// }

    const greet = (name) => {
        console.log (`hello, ${name}`)
    }
    greet ("abdul")
// Q2) Write a simple arrow function that takes two parameters and returns their sum.
const sum = (num1,num2) => {
return num1 + num2;
}
console.log (sum (3,7))
// Q3) Write a simple arrow function that squares a number.

const seq= (num) => {
    return num * num;
    }
    console.log (seq (7))


// Q4) [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(number => number * number);

console.log(squaredNumbers); 

