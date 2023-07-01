

/*Function currying is a technique in JavaScript where a function with multiple arguments is transformed into 
a sequence of functions, each taking a single argument. */

function multiply(a) {
    return function(b) {
      return a * b;
    };
  }
  
  // Currying the multiply function
  const multiplyByTwo = multiply(2);
  console.log(multiplyByTwo(4)); // Output: 8
  
  const multiplyByThree = multiply(3);
  console.log(multiplyByThree(5)); // Output: 15
  