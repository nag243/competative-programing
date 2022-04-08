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

// JS Quiz - 6

navigator.geolocation.getCurrentPosition(function getPosition (position) {
    console.log( position.coords.latitude);
    console.log(position.coords.longitude)
})

// Output:
// 14.6154
// 80.1057

// JS Quiz - 7
// Replace with value 0 from index 1 up to but not including 3.
console.log([1,2,3,4,5].fill(0,1,3))
 [1, 0, 0, 4, 5]

// JS Quiz - 8
// The .reduce() array method in JavaScript is really powerful - and it's useful to combine multiple elements from an array into a single value
const prices = [8,41,17,29,33]

const sum = prices.reduce((totalPrice, currentPrice) => {
    return totalPrice += currentPrice
}, 0)
console.log(sum)
// Output:
// 128

