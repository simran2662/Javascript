// Assigning an anonymous function to a variable
const multiply = (x, y) => x * y;

// Passing the anonymous function as an argument to another function
function operate(func, a, b) {
    return func(a, b);
}

// Calling the function with the anonymous function as an argument
const result = operate(multiply, 3, 4);

console.log(result); // Output: 12 (3 * 4)
