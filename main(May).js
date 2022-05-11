// JS Quiz - 1

// when you pass 'func' to setTimeout it is not referring 'func' variable,
//  instead to the original function itself (which func was pointing at that time)
let func = () => {
    console.log(1)
}
setTimeout(func, 100)
func = () => {
    console.log(2)
}

// JS Quiz - 2 
//Trucate numbers in JS
console.log(~~47.11) //47

console.log(~~1.9999) //1

console.log(~~3) //3

// works with 32 bit integer. so if over maximum 32-bit integer
console.log(2147883647 + 1000)
2147884647

// all non-number converts tot 0
console.log(~~[]) //0
console.log(~~NaN) //0
console.log(~~null) //0

// JS Quiz  - 3
// Add underscore between your digits for easier formatting and stop counting zeros (format big numbers in Javscript)

const million = 1_000_000;
const billion = 1_000_000_000;
const trillion = 1_000_000_000_000;

// JS Quiz - 4 

// filter even number
nums.filter(function isEven(num) {
    return num % 2 === 0;
})
//  [2, 4, 6, 8]

// filter odd number
nums.filter(function isOdd(num) {
    return num % 2 != 0;
})
// [1, 3, 5, 7]

// JS Quiz - 5
// .concat()  Generating a new array by adding by adding array elements
// we can join two or more array

const firstNames = ["Nag", "Jai", "Victor"];
const lastNames = ["Rockz", "Balayya", "Vicky"]

const fullNames = firstNames.concat(lastNames);

console.log(fullNames)
// ['Nag', 'Jai', 'Victor', 'Rockz', 'Balayya', 'Vicky']

// JS Quiz - 6
// Serialize specific properties from a JSON object
const user = {
    id: 1234,
    username: 'nagsai',
    name: 'Nag Sai',
    age: 39
};

JSON.stringify(user, ['username', 'name'])
// '{"username":"nagsai","name":"Nag Sai"}'

// JS Quiz - 7
// Array destructuring 
// skip the first and third item on the list.
let [, pronoun, , name] = ["Hello", "I", "am", "Sarah"];

console.log(pronoun);//"I"
console.log(name);//"Sarah"

// JS Quiz - 8
// Why is this printing 1 instead of printing 2
// when you pass 'func' to setTimeout it is not referring 'func' variable, 
// instead to the original function itself (which func was pointing at that time)

let funct = () => {
    console.log(1)
}
setTimeout(funct, 100)
funct = () => {
    console.log(2)
}

// JS Quiz - 9

// Double bitwise NOT Operator (~~)

// Note - Use of Double Bitwise NOT Operator reduces the readability of code but
//  in some scenarios, it improves the performance of code.

// The double bitwise NOT is actuallu not an operator on its own.
//  it's just applying the single bitwise NOT operator(~) twice.

// Note: This approch only works for 32-bit integers 
// i.e (2**31) - 1 = 2147483637 .So for any number more than that use Math.floor().
//longhand
const a = Math.floor(6.9);
console.log(a)
6

//shorthand
const b = ~~6.9
console.log(b)
6

// JS Quiz - 10
// Check if at least of one element in the array satisfy the condition 

const people = [
    { name: "Nag", Gender: "Male" },
    { name: "Victor", Gender: "Male" },
    { name: "Cren ", Gender: "Female" },
    { name: "Jaun", Gender: "Female" },]

const isWomen = people.some(user => user.Gender === 'Female')

console.log(isWomen)
true

// JS Quiz - 11

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruts.sort())
//  ['Apple', 'Banana', 'Mango', 'Orange']

// Note:But it won't work with numbers 


