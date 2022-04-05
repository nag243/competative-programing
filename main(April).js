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
// JS Quiz - 3
// Boolean of [ ], { } is true,
// type of [ ] is object
const array = [];

if(!array) {
    console.log("I have no values")
}

if(!array?.length) {
    console.log("No, I really have no values");
}
// Output:
// No, I really have no values

// JS Quiz - 4
//  How to get the battery status of user machine's

navigator.getBattery().then((battery) =>{
    console.log(battery)
})

// JS Quiz - 5

// Short circuit statements can be difficult to read Use with caution!

condition && doAction();
// Short circuit evalution is a neat trick. if the left side of an AND is aleady false, you don't need to evalute the right side.
if(condition){
    doAction();
}

