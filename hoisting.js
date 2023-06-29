

/*Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during 
the compilation phase. This means that you can use variables and functions before they are actually declared in your code.
 However, it's important to note that only the declarations are hoisted, not the initializations or assignments.


let and const declarations are hoisted to the top of their containing scope but cannot be accessed before their declaration 
due to the temporal dead zone.

var declarations are also hoisted to the top of their containing scope but have an initial value of undefined, 
allowing them to be accessed (although with an undefined value) before their declaration.

Function declarations are fully hoisted, allowing you to call a function before its actual placement in the code.*/

console.log(myVariable); // Output: undefined
var myVariable = 10;

hoistedFunction(); // Output: "Hello, I am a hoisted function"
function hoistedFunction() {
  console.log("Hello, I am a hoisted function");
}

console.log(myVariable); // Throws ReferenceError: Cannot access 'myVariable' before initialization
let myVariable = 10;

hoistedFunction(); // Throws ReferenceError: Cannot access 'hoistedFunction' before initialization
const hoistedFunction = () => {
  console.log("Hello, I am a hoisted function");
};



