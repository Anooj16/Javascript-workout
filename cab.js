//Call--------------------------------------------------------------------------------------------------------------

    /*The call method is used to invoke a function with a specified this value and arguments provided individually. 
    It allows you to explicitly set the context (this) for a function and pass arguments one by one.

     Syntax: function.call(thisArg, arg1, arg2, ...)*/

     const person = {
        firstName: "John",
        lastName: "Doe",
        fullName: function() {
          return this.firstName + " " + this.lastName;
        }
      };
      
      const greeting = function(message) {
        console.log(message + " " + this.fullName());
      };
      
      greeting.call(person, "Hello"); // Output: Hello John Doe
        

//Apply-----------------------------------------------------------------------------------------------------------------


    /*The apply method is similar to call, but it accepts an array-like object as the second parameter instead of individual arguments.
     It invokes a function with a specified this value and an array of arguments.

     Syntax: function.apply(thisArg, [argsArray])*/


     const numbers = [1, 2, 3, 4, 5];

const maxNumber = Math.max.apply(null, numbers);
console.log(maxNumber); // Output: 5



//Bind--------------------------------------------------------------------------------------------------------------------


     /*The bind method returns a new function with a specified this value and, optionally, partially applied arguments. 
     It allows you to create a function that is bound to a specific context and can be invoked later.

     Syntax: function.bind(thisArg, arg1, arg2, ...)*/

     const person1 = {
        firstName: "John",
        lastName: "Doe",
        fullName: function() {
          return this.firstName + " " + this.lastName;
        }
      };
      
      const greeting1 = function(message) {
        console.log(message + " " + this.fullName());
      };
      
      const boundGreeting = greeting.bind(person);
      boundGreeting("Hello"); // Output: Hello John Doe
      