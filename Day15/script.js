// Code Component (Thread of Execution)

// Memory Component (Variable Environment)

// The Two Phases of Code Execution

// Memory Creation Phase (The Setup)

// var n = 2;
// function square(num) {
//   var ans = num * num;
//   return ans;
// }
// var square2 = square(n);
// var square4 = square(4);

// Code Execution Phase (The Action)

// This new Execution Context is like a mini-box created inside the Global Execution Context. This mini-box also
// goes through the same two phases:
// Phase 1 for square(n) function:
// num → undefined
// ans → undefined

// Phase 2 for square(n) function:
// num gets the value 2 (passed as argument)
// ans is calculated: 2 * 2 = 4
// return ans sends 4 back to the Global Context
// The function execution context is deleted/destroyed
// Back in Global Context:
// square2 now gets the value 4
// Line 7: var square4 = square(4);
// The same process repeats: new execution context is created
// num → 4
// ans → 16
// Returns 16 to Global Context
// Function execution context is destroyed
// square4 gets the value 16

// Call Stack Walkthrough with Example

// var n = 2;
// function square(num) {
//   var ans = num * num;
//   return ans;
// }
// var square2 = square(n);
// var square4 = square(4);

