/*The inner function can access the variables from the outer function, even when the outer function has completed its execution.
This ability to access variables from an outer function is what we call a closure.Closures are useful because they allow 
functions to remember and access variables that were present at the time of their creation. It's as if the inner function carries
 a snapshot of the variables it needs from the outer function. */

 function outerFunction() {
    const outerVariable = 'I am from the outer function';
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  // Create a closure by assigning the inner function to a variable
  const closure = outerFunction();
  
  // Invoke the closure
  closure();  // Output: "I am from the outer function"
  
