function counter(n) {
    let count = n;
    return function() {
      return count++;
    };
  }
  
  function executeFunctionCalls(n, calls) {
    const result = [];
    const incrementCounter = counter(n);
  
    for (let i = 0; i < calls.length; i++) {
      if (calls[i] === "call") {
        result.push(incrementCounter());
      }
    }
  
    return result;
  }
  
  // Example usage:
  console.log(executeFunctionCalls(10, ["call", "call", "call"])); // Output: [10, 11, 12]
  console.log(executeFunctionCalls(-2, ["call", "call", "call", "call", "call"])); // Output: [-2, -1, 0, 1, 2]
  