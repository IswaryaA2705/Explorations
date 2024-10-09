function Greet(name) {
    return `Hello, ${name}!`;
  }
  
  console.log(Greet("John"));
  const multiply = (a, b) => a * b;

  console.log(multiply(4, 5)); 

  const add = function(a, b) {
    return a + b;
  };
  
  console.log(add(5, 10)); 


  (function() {
    const message = "This runs immediately!";
    console.log(message); 
  })();


  function factorial(n) {
    if (n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  console.log(factorial(5)); 

function performOperation(operation, a, b) {
    return operation(a, b);
  }
  
  const addition = (x, y) => x + y;
  const subtract = (x, y) => x - y;
  
  console.log(performOperation(addition, 10, 5));     
  console.log(performOperation(subtract, 10, 5)); 
  
  
  
  
  
  
  