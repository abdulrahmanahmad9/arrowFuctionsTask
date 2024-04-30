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