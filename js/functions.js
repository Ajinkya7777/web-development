// this is a normal function
function helloworld() {
  console.log("hello-world");
}

//function expression --> it's nothing but storing the function as a value to inside the variable it may be var,let,or const
// we are storing the value of the function inside the variable and function will be annoynmous bcz it doesn't have any name
const helloworld2 = function () {
  console.log("hello-world2");
};

console.log("function type", typeof helloworld);
console.log("function type", typeof helloworld2);
helloworld();
helloworld2();

//arrow function
// 1. if function is taking one input then parentesses are optionals
// 2. if function returns or has only one statment inside the curly braces then curly braces are optional
// 3. if function takes more than two input/ parameters or it has nothing to take input then parentheses are mandatory
const helloword3 = (name) =>
  console.log("this is arrow function --> hello-world3 " + name);

helloword3("Ajinkya");

// arrow function for even check
const isEven = (num) => num % 2 === 0;

console.log(isEven(6));

// default parameters
const sum = (no1, no2 = 0) => no1 + no2;
console.log(sum(4));
