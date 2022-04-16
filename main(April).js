// JS quiz -  1

console.log(Math.max())
    - Infinity

console.log(Math.min())
Infinity

// JS Quiz - 2

// Many of us have encountered Factorial logic in an interview that requires numerous lines of code, however we can create this code in just one line.Have a look below 👇.

const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1))

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

if (!array) {
    console.log("I have no values")
}

if (!array?.length) {
    console.log("No, I really have no values");
}
// Output:
// No, I really have no values

// JS Quiz - 4
//  How to get the battery status of user machine's

navigator.getBattery().then((battery) => {
    console.log(battery)
})

// JS Quiz - 5

// Short circuit statements can be difficult to read Use with caution!

condition && doAction();
// Short circuit evalution is a neat trick. if the left side of an AND is aleady false, you don't need to evalute the right side.
if (condition) {
    doAction();
}

// JS Quiz - 6

navigator.geolocation.getCurrentPosition(function getPosition(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude)
})

// Output:
// 14.6154
// 80.1057

// JS Quiz - 7
// Replace with value 0 from index 1 up to but not including 3.
console.log([1, 2, 3, 4, 5].fill(0, 1, 3))
[1, 0, 0, 4, 5]

// JS Quiz - 8
// The .reduce() array method in JavaScript is really powerful - and it's useful to combine multiple elements from an array into a single value
const prices = [8, 41, 17, 29, 33]

const sum = prices.reduce((totalPrice, currentPrice) => {
    return totalPrice += currentPrice
}, 0)
console.log(sum)
// Output:
// 128

// JS Quiz - 9
// delete operator in JavaScript
const user = {
    firstName: 'Nag',
    lastName: 'Wick'
};

delete user.lastName;

console.log(user)
{ firstName: 'Nag' }

//  JS Quiz - 10
// ***** Regex with Javascript ****
// Match string pattern and ignore upper nd lowercase characters with i flag
const string = "my name is nag"

let reg = /nag/i;

let result = reg.test(string);

console.log(result)
true

//  JS Quiz - 11
const handleVisabilityChange = () => {
    if (document.visibilityState === "hiden") {
        console.log("user left the page")
    } else {
        console.log("user opened the page")
    }
}

document.addEventListener("visibilitychange", handleVisabilityChange);

// JS Quiz - 12
// 𝗖𝘂𝗿𝗿𝘆𝗶𝗻𝗴 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻 
// ____________________
// ✔️𝘐𝘵'𝘴 𝘢 𝘧𝘶𝘯𝘤𝘵𝘪𝘰𝘯𝘢𝘭 𝘱𝘳𝘰𝘨𝘳𝘢𝘮𝘮𝘪𝘯𝘨 𝘢𝘱𝘱𝘳𝘰𝘢𝘤𝘩 𝘵𝘩𝘢𝘵 𝘵𝘶𝘳𝘯𝘴 𝘢 𝘧𝘶𝘯𝘤𝘵𝘪𝘰𝘯 𝘸𝘪𝘵𝘩 𝘴𝘦𝘷𝘦𝘳𝘢𝘭 𝘱𝘢𝘳𝘢𝘮𝘦𝘵𝘦𝘳𝘴 𝘪𝘯𝘵𝘰 𝘢 𝘴𝘦𝘳𝘪𝘦𝘴 𝘰𝘧 𝘧𝘶𝘯𝘤𝘵𝘪𝘰𝘯𝘴 𝘸𝘪𝘵𝘩 𝘢 𝘴𝘪𝘯𝘨𝘭𝘦 𝘢𝘳𝘨𝘶𝘮𝘦𝘯𝘵.
// _______________________________
// 𝗨𝘀𝗲𝘀 𝗼𝗳 𝗰𝘂𝗿𝗿𝘆𝗶𝗻𝗴 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻
//  ✔️ 𝘐𝘵 𝘩𝘦𝘭𝘱𝘴 𝘵𝘰 𝘢𝘷𝘰𝘪𝘥 𝘱𝘢𝘴𝘴𝘪𝘯𝘨 𝘵𝘩𝘦 𝘴𝘢𝘮𝘦 𝘷𝘢𝘳𝘪𝘢𝘣𝘭𝘦 𝘢𝘨𝘢𝘪𝘯 𝘢𝘯𝘥 𝘢𝘨𝘢𝘪𝘯.
//  ✔️ 𝘐𝘵 𝘪𝘴 𝘦𝘹𝘵𝘳𝘦𝘮𝘦𝘭𝘺 𝘶𝘴𝘦𝘧𝘶𝘭 𝘪𝘯 𝘦𝘷𝘦𝘯𝘵 𝘩𝘢𝘯𝘥𝘭𝘪𝘯𝘨. 

function num(x) {
    return function (y) {
        return function (z) {
            return x * y * z
        }
    }
}

console.log(num(2)(3)(4))
24

// JS Quiz - 13
console.log('first')

function second() {
    setTimeout(function () {
        console.log('second')
    }, 2000)
}

function third() {
    setTimeout(function () {
        console.log('third')
    }, 1000)
}

async function start() {
    await second();
    third();
}

start()
// Output: 
// first 
// third
// second

// JS Quiz - 14
// Looking for the output as first, second, third
console.log('first'); 

function second(){ 
return new   Promise((resolve,reject)=>{
 setTimeout(function(){ 
   console.log('second') },2000)
})
} 

function third(){ 
 setTimeout(function(){ 
   console.log('third') },1000) 
} 
async function start(){ 
 await second();
 third(); 
} 
start();
// Output:
// first
// second


// JS Quiz - 15
// Every() is a JS function that checks whether all elements pass a certain condition.


const arr = [1, 2, 3, 4, 5, 6]
const even = x => x % 2 == 0;

if (arr.every(even))
    console.log('Every element is even');
else
    console.log('At least one element was odd');

// Output:
// At least one element was odd

// JS Quiz - 16
// Generate random number between two numbers in JavaScript

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min)
}


// JS Quiz - 17
// Some() is similar to every(), with a small difference.
// When every() checks if all elements pass a condition, some() returns true when at least one element passes a condition.

const numbers  = [1,2,3,9,5,6,4];

const over_severn = x => x>7;

if(numbers.some(over_severn))
    console.log('at least one element bigger than 7 was found');
else 
    console.log('No element bigger than 7  was found');
// Output: at least one element bigger than 7 was found


// JS Quiz - 18
// When you run the console.log, it simply calls toString method on array and converts it to string. It calls this method because of the '+' to add them.
// Now, when we have two strings, it will concat them and return the result.
var array1 = [1,2,3]
var array2 = [4,,5,6]

console.log(array1+array2)
// Output:1,2,34,,5,6


// JS Quiz - 19
//Use blanck commas to skip over unwatnted values and assign the remaining part of it to a variable using rest pattern while array destrructuring 
const allNumbers = [10,20,30,40,50,60]
const [,,, ...newNumbers] = allNumbers;

console.log(newNumbers)
// Output:[40, 50, 60]


// JS Quiz - 20
// Answer - Error, 200)
// Reason - In the function expression, it has object as an parameter which have two property as default value.
// So, it expect that whenever this function get called it should have object as argument even it can be empty.
// So when we call that function without any argument then it will through an error saying "cannot read properties of undefined".
// Where as in other case, it will use default paramter value and will print as 200.

const area=({length = 10, width = 20})=>{
    console.log(length*width)
}

area();
// Output:
// error
area({})
// Output:
// 200

// JS Quiz - 21
// Reason - As in this function, 'age' we are comparing but here it is in octal format.
// Any number starts with 0 and followed by 0 to 7 as remaining digit is treated as Octal number whose base is 8.
// So to perform any arithmetic or logical operation, this octal number need to be convert in decimal. Here it is:
// 021 => 0x(8^2) + 2x(8^1) + 1x(8^0)
// 021 => 0 + 16 + 1 => 17
// Now, we are comparing this 17 >= 18 and based on comparison it is choosing the value kept in ternary operator.

function checkAge () {
    var age = 021;
    return age >= 18 ? "Above 18" : "Below 18";
}

console.log(checkAge())
// Output:Below 18

// JS Quiz - 22
// function passed to setTimout is executed after 1 minute, but the thing is that setTimeout
//  executes the function without any context. 
// So the default binding of this in a non strict binding is the window environment. 
// In that environment var x = 4 is declared thats why this.x is resolved to a value of 4

var x=  4,
    obj = {
        x:3,
        bar:function() {
            var x = 2;
            setTimeout(function() {
                var x = 1;
                alert(this.x);
            },1000);
        }
    };

obj.bar();
// Guess the Output:
// 1
// 2
// 3
// 4
// Output:It it will alert as 4 




