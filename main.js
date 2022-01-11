function multiply(x) {
    return function (y) {
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
});
    )


//     When we don't declare variables using var, le, or const then that variable has global scope it becomes member of window object i.e window.y : 10
// so y can be accessed outside IIFE but x has function scope so we will get undefined when trying to use x outside IIFE.
(() => {
    let x = (y = 10);
})();

console.log(typeof x);
console.log(typeof y);


//'date' is Date object

function isWeekEnd(date){
    return date.getDay() % 6 ===0;
}

isWeekEnd(new Date('1-15-2022')); // true - Satureday
isWeekEnd(new Date('1-16-2022')); //true - Sunday
isWeekEnd(new Date('1-17-2022')); // false - Monday




