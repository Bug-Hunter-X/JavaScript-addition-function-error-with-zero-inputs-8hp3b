function foo(a, b) {
  if (a === 0 && b === 0) {
    return NaN; // Return NaN to explicitly handle this case
    // Or throw an error: throw new Error('Both inputs cannot be zero');
  } else if (a === 0 || b === 0) {
    return 0; // Handle the case when one input is zero
  }
  return a + b;
}

console.log(foo(0, 0)); // Outputs NaN
console.log(foo(5, 3)); // Outputs 8
console.log(foo(0, 5)); // Outputs 0