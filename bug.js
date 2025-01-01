function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This line is incorrect for the case when both a and b are 0
  }
  return a + b;
}

console.log(foo(0, 0)); // Outputs 0, but should ideally handle this case differently or throw an error.
console.log(foo(5, 3)); // Outputs 8 (Correct)
console.log(foo(0, 5)); //Outputs 0 (Incorrect for this case)