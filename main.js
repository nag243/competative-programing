// JS Quiz  -7
function num(a, b, a) {
    console.log(a, b, a)
}
num(1, 2, 3);
//output : 3,2,3
// The answer would be 3,2,3, the reason is the first value of a is set to 1 and b to 2 
// but at last value of a is reassigned to 3, 
// so it will console, 3,2,3 as the final value as the corresponding value of a,b, a.







// JS Quiz -6

(function() {
    var array1 = [];
    var array2 = new Array(100);
    var array3 = new Array(['1', 2, '3', 4, 5.6]);
    console.log(array1);
    console.log(array2);
    console.log(array3);
    console.log(array3.length);
}());

// Output
// []
// (100) [empty × 100]
// [Array(5)]
// 1


// JS Quiz -5
const arr = [0, 1, 2, 3, 4, 5]
const reverse = arr.reverse();
console.log(reverse)

// Ouput
[5, 4, 3, 2, 1, 0]

// Array.reverse() mutates the original array it was caled on in place.
// This means that the original array was reversed and the variable array
// was updated to point to this new reversed array. 


// JS Quiz - 4

function myFun(x, y, ...manyMoreArgs) {
    let sum = 0;
    manyMoreArgs.forEach(value => {
        sum += value
    })
    console.log(sum);
}
myFun(1, 2, 3, 4, 5);
myFun(1, 2);

// options A:12,0   B: 0,12  C:error  D:undefined

// Output: 12,0
// Reason: In first function call , it will assign first two values in x and y and rest of values in manyMoreArgs and will return 12 as sum.

// In second function call, it will assign 1 and 2 in x and y and manyMoreArgs will be empty array so it will return 0 as sum.






// The postfix unary operator ++
// 1) Return the value
// 2) Increments the value

// The prefix unary operator ++
// 1) Increments the value
// 2) Returns the value

let number = 0
console.log(number++)
console.log(++number)
console.log(number)


// Output Would be: 0 2 2

// When first-line gets executed then a variable number is assigned with a value of 0
// At Line 2: number++ means to print the number then increment and assign back the update number so it would give output as 0

// After execution of line 2 number variable will be updated with 1 as we used post-increment

// At line 3: ++number means increment and update the value first, so number variable will become 2

// and output of this line will be 2

// At line 4: It will again print the same as there is no modification made to the number variable.

// So, Final Output will be 0 2 2









// addition in Javascript 

Number + Number - > addition
Boolean + Number - > addition
Boolean + Boolean - > addition
Number + String - > concatenation
String + Boolean - > concatenation

//type obj is not iterable

const obj = { 'Id': 'ABC123' };

//while assigning arr to array of object[ ...obj] will through Typeerror due to obj is not iterable
const arr = [...obj]

console.log(arr)
    //output
TypeError



// function curring 
function multiply(x) {
    return function(y) {
        return x * y
    }
}
console.log(multiply(2)(3))

//parse int

const num = parseInt('7*6', 10);

console.log(num)

//output = 7

// It parses the string and returns the first integer, hence num will have 7


//Generate random Boolean values by using 𝗠𝗮𝘁𝗵.𝗿𝗮𝗻𝗱𝗼𝗺() function.
// 𝗠𝗮𝘁𝗵.𝗿𝗮𝗻𝗱𝗼𝗺() generates random floating-point values range between 0 to 1.
// By checking middle value like 0.5 we can get probability of both true and false.
// Using <=, >= , < or >


function germathrandom() {
    return Math.random() >= 0.5;
}

germathrandom()

// Answer would be: [undefined, undefined, undefined]
// While execution of if statement typeof num === "number" returns 'true' as all the number in array is a number([2,2,3]).
// The map function will creates a new array and inserts the values returned from the function and here the function is not returning any value when if condition satisfy. So when a function didn't return a value then by default the function will return 'undefined'.
// So, for all three elements the if block will came into picture and for every element if condition will be true, therefore for each element it will return undefined and prints [undefined, undefined, undefined]

console.log([1, 2, 3].map(num => {
    if (typeof num === 'number') return;
    return num * 2;
}))


//     When we don't declare variables using var, le, or const then that variable has global scope it becomes member of window object i.e window.y : 10
// so y can be accessed outside IIFE but x has function scope so we will get undefined when trying to use x outside IIFE.
(() => {
    let x = (y = 10);
})();

console.log(typeof x);
console.log(typeof y);


//'date' is Date object

function isWeekEnd(date) {
    return date.getDay() % 6 === 0;
}

isWeekEnd(new Date('1-15-2022')); // true - Satureday
isWeekEnd(new Date('1-16-2022')); //true - Sunday
isWeekEnd(new Date('1-17-2022')); // false - Monday

//How to add conditional properties to an object - add property only if value is truthy:

const details = { id: 101, name: 'Nag', };
const password = 'walter!@1998';
const dudeWithPassword = {
    ...details,
    ...(password && { password }),
};
console.log(dudeWithPassword)


//flapMap is mainly used to flatten the array when you have
//nested arays.
//But flapMap can also be used as a way to add and remove 
//items (modify the number the number of items ) during a map

const arr = [0, 4, 7]

const doubled = arr.flatMap(num => {
    return num === 0 ? [] : [2 * num];
});

console.log(doubled);

// how do you check if a given property exists in object?

const todo = {
    title: 'friday',
    description: 'post someting about Javascript'
}

//output
!!todo.createdDate
false
    !!todo.title
true



// 'b' is an object, whereas 'a' and 'c' are of type number.
// true, false, false

let a = 3
let b = new Number(3)
let c = 3;

console.log(a == b)
console.log(a === b)
console.log(b === c)



//
var person = Object.create({
    name: "SG",
    height: "5.3"
});
delete person.height;

console.log(person.height)

//Output 
//"5.3".Because height property on the prototype of the person object not on itself.so, deletion doesn't do anything

// the push operation returns the latest length of an array.

function addToList(item, list) {
    return list.push(item);
}
const result = addToList('apple', ['banana']);
console.log(result)
    //output
2

//JavaScript tries to find a property called colors on the colorConfig object. 
// There is no property called colors, so this returns undefined.
//  Then, we try to access the value of the first element by using [1]. 
// We cannot do this on a value that's undefined, so it throws a TypeError
const colorConfig = {
    red: true,
    blue: false,
    green: true,
    black: true,
    yellow: false,
};

const colors = ['pink', 'red', 'blue'];

console.log(colorConfig.colors[1]);
//output
TypeError

//user and userList holds the same reference value.
// So, we did reassigned the user variable but still userList points to the same reference.
//  Hence, array with user object is the answer.

let user = { name: 'Nag Sai' };

const userList = [user]
user = null;
console.log(userList)

// output
{ name: 'Nag Sai' }

// Inside random function, the variable declaration can be hoisted so x holds undefined.
//  If we try to do post increment then we get NaN as it is not a number.

var x = 23;
(function() {
    var x = 43;
    (function random() {
        x++;
        console.log(x);
        var x = 21;
    })();
})();
//  Output
NaN

// Sorting won't work number with sort() method
const numbers = [2, 55, 7];

numbers.sort();
console.log(numbers[2]);
// Output
7
// instead we can write custome callback to sort number
numbers.sort((a, b) => a - b)
    //JS quiz -3
    //Undefined because function doesn't returns anything 
    (function() {
            var animal = ['cow', 'horse'];
            animal.push('cat');
            animal.push('dog'
                rat ''
                goat ');
                console.log(animal.length);
            })();

        //Output 
        Undefined

        // Which varible end up being part of func's closure?

        var c = 10;

        function foo(a) {
            let b = 8;
            const d = 10;
            return function bar() {
                return a + d + c;
            }
        }
        const func = foo(7)
            // output
        a, d, c