# JavaScript Addition Function Bug

This repository demonstrates a common yet subtle bug in JavaScript function handling zero inputs. The `foo` function is supposed to add two numbers; however, it incorrectly handles the case where both inputs are zero. 

## Bug Description

The function returns 0 if either of the inputs is 0, even if both are 0. This is a logical error that might lead to unexpected results in certain applications.  The ideal behavior would be to return a specific result or throw an exception in such cases.

## Bug Solution

The `bugSolution.js` file demonstrates several ways to improve this function so it works as expected.

## How to run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred text editor or IDE.
3. Run the JavaScript files in your browser's console or using Node.js.