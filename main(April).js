// JS quiz -  1

console.log(Math.max())
-Infinity

console.log(Math.min())
Infinity

// JS Quiz - 2

// Many of us have encountered Factorial logic in an interview that requires numerous lines of code, however we can create this code in just one line.Have a look below 👇.

const factorial = (n) => (n <= 1 ? 1 : n* factorial(n - 1))

factorial(2)
2
factorial(3)
6
factorial(5)
120