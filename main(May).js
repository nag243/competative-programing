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

// JS Quiz - 12

// The Event Loop reads this info and starts pushing each Call-back function from Call-Back Queue into the Call-Stack in the order they came in(FIFO).

// For the first three call-back functions, ➡️ the value of i = 3.
// because the for loop has updated the value to 3, before any call-back function is executed.
// 1st CB Function -> i = 3, 
// 2nd CB Function -> i = 3, 
// 3rd CB Function -> i = 3.

// And for the next 3 call-back functions, ➡️ the value of 'i' is 0, 1, 2.
// because that's what each call-back function is bound with.
// 1st CB Function -> i = 0, 
// 2nd CB Function -> i = 1, 
// 3rd CB Function -> i = 2.

// ➡️ when i = 3 the condition becomes false, and
// ➡️ No call-back function with i = 3 is pushed to the Call-Back Queue.
for(var i= 0; i< 3; i++) {
    setTimeout( () =>{ console.log(i),1})
}
// 3 3 3 

for(let  i= 0; i< 3; i++) {
    setTimeout( () =>{ console.log(i),1})
}
// 0 1 2 

// JS Quiz - 13
// Javascript replaceAll() method!

// Use this method to replace a character from the string completely.
// It's very useful in situations where we have to remove unnecessary characters
//  repeated across a string or change one word to another.

const string  = '&Linkdin &Community &is the &best';

const newString = string.replaceAll('&', '');

console.log(newString) //Linkdin Community is the best


// JS Quiz - 14
//𝗛𝗲𝗿𝗲 𝗮𝗿𝗲 𝗦𝘁𝗲𝗽𝘀 𝗜 𝗳𝗼𝗹𝗹𝗼𝘄𝗲𝗱 𝘁𝗼 𝘄𝗿𝗶𝘁𝗲 𝗟𝗼𝗴𝗶𝗻 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻𝗮𝗹𝗶𝘁𝘆 

userSchema.statics.login=async function (email, password) {
    const user=await this.findOne({email});
    if(user) {
        const auth=await bcrypt.compare(password, user.password)
        if(auth){
            return user 
        }
        throw Error ('incorrect password')
    }
    throw Error ('incorrenct email')
}
// https://www.linkedin.com/feed/update/urn:li:activity:6931174699494207488/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A6931174699494207488%29


// JS Quiz - 15
// Replace a  value in object 
var usr = {name: "John Doe", email: "johndoe@gmail.com"};

// If you want to replace a part of email by another thing:
usr.email = usr.email.replace("johndoe", "newjohndoe")

// If you just want to setup a new email:
usr.email = "newjohndoe@gmail.com"

// JS Quiz - 16
// null equal to itself or to undefined (null == null or null == undefined)
// and null not comparable with(> or <) it will return false,
// but will return true with comparison and equality together.
console.log(null > 0)
false

console.log( null >= 0);
true