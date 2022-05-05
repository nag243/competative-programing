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
    return num % 2 ===0;
})
//  [2, 4, 6, 8]

// filter odd number
nums.filter(function isOdd(num) {
    return num % 2 !=0;
})
// [1, 3, 5, 7]

// JS Quiz - 5
// .concat()  Generating a new array by adding by adding array elements
// we can join two or more array

const firstNames = ["Nag","Jai","Victor"];
const lastNames = ["Rockz","Balayya", "Vicky"]

const fullNames= firstNames.concat(lastNames);

console.log(fullNames)
// ['Nag', 'Jai', 'Victor', 'Rockz', 'Balayya', 'Vicky']
