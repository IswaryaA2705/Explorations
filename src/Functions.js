function Greet(name) {
    return `Hello, ${name}!`;
  }
  
  console.log(Greet("John"));
  //arrow functions
  const multiply = (a, b) => a * b;

  console.log(multiply(4, 5)); 

  //function expression
  const add = function(a, b) {
    return a + b;
  };
  
  console.log(add(5, 10)); 
  //Immediately Invoked Function Expressions

  (function() {
    const message = "This runs immediately!";
    console.log(message); 
  })();

  //Recursive functions

  function factorial(n) {
    if (n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  console.log(factorial(5)); 
  
//higher order functions 
function performOperation(operation, a, b) {
    return operation(a, b);
  }
  
  const addition = (x, y) => x + y;
  const subtract = (x, y) => x - y;
  
  console.log(performOperation(addition, 10, 5));     
  console.log(performOperation(subtract, 10, 5)); 
  
  
  
  
  
  
  