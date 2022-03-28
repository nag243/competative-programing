<!-- JS Quiz -1 -->

let num=[1,2,3,4,5,6,7];
let[a,c,b] = num;
Here a, b,c or a, c, b are treating as index values of num array
Output will be
console.log(a,b,c)
1 3 2
console.log(a,c,b)

<!--JS Quiz -2  -->
var length = 10;

function fn() {
    var length = 20;
    console.log(this.length)
}

fn()
10

<!-- JS Quiz -3  -->
let result = 0;
for(let i =0; i<5; i++) {
    result+= i;
}
10
console.log(result)
10

<!-- JS Quiz -4  -->

<!-- The keyword "in" returns the object keys and the keyword "of" returns the object values.-->
<!-- Actually should say "for (let prop)" , otherwise it won't recognize prop or any other iterator name.

With this change, it will log the properties (3rd answer).

bedrooms
bathrooms
sqft

To log the result like first one we should say:

for (let prop in house) {console.log(`${prop}: ${house[prop]}`)} -->
const house = {
bedrooms: 2,
bathrooms: 1,
sqft: 1234
}

for (prop in house) {console.log(prop)}


<!-- JS quiz -5-->
<!-- Use length to resize an array in JavaScript-->
var entries = [ 1,2,3,4,5,6,7]
console.log(entries.length)
7
entries.length = 4
4
console.log(entries.length)
4

console.log(entries)
Output:
[1, 2, 3, 4]

<!-- JS quiz -6 -->

var a = 42;

var b = a++

b= (a ++, a)
44

console.log(a)
44
console.log(b)
44

<!-- JS quiz - 7 -->

<!-- const Human = (name) =>({
    name:name,
})

const Student = (name) = ({
    ...Human(name),
    sayHello() {
        return `hello i'm ${this.name}`
    }
})

Student("Nag").sayHello() -->

<!-- JS quiz - 7 -->

var age;

age + 54
//NaN
console.log(age)
undefined

<!-- JS quiz -8 -->
let myArray = [0,1,2,3,4]
myArray.forEach(num => console.log(num %2))
Output:
0,1, 0,1,0

<!-- JS quiz - 9 -->
const myBook = {
    title:"The Giver",
    author:"Lois Lowry",
}

myBook.pages = 226

console.log(myBook)
Output:{title: 'The Giver', author: 'Lois Lowry', pages: 226}

<!-- JS quiz - 10 -->

console.log(0, 01, 010, 021)
Output: 0 1 8 17(Numbers starting with 0 are read as octals. )

<!-- JS quiz - 11 -->

var sum = 0;
for(i = 4; i<8; ++i) {
    if(i==6) {
        continue
    }
    sum+=1
}

Output:3

<!-- JS quiz - 12 -->

let person = {
    name: 'leonardo'
};

let animal = {
    species: 'snake'
};

Object.freeze(person);
person.name = "Leema"
console.log(person)

Output: {name: 'leonardo'}

<!-- JS quiz - 13 -->

var str = "potato potato";
console.log(str.replace(/pot/, "tom"));
Output: "tomato potato"
we can't replace all the occurrenes
by adding /g at the end of the regex.

console.log(str.replace(/plot/g, "tom"));
Output:"tomato tomato

<!-- JS quiz - 14 -->

let dummyObj = {
    price: 4502,
    get_price: function () {
        return this.price;
    }
}

let realobj = Object.create(dummyObj)
realobj.price = 3000;

delete realobj.price;
console.log(realobj.get_price());

Output: 4502

<!-- JS quiz - 15 -->

console.log("a" + "b")
ab

console.log("a" & "b")
0

console.log("a" && "b")
b

<!-- JS quiz - 16 -->

const array = [
    {id:1,name:"javascript", type:"language"},
    {id:2,name:"Angular", type:"Framework"}
    {id:3name:"NGRX", type:"State Management "}
]
<!-- old way -->

array.map((data) = console.log(data.name, data.type))

<!-- new way -->

array.map(({name, type}) => console.log(name, type))

<!-- JS quiz -17 -->

function foo1() 
{
    return {
        bar:"hello"
    };
}

function foo2() 
{
    return 
    {
        bar:"qasim"
    }
}

The first function will return the object itself where as the second function will return undefined.

Reason: ASI rule

<!-- JS quiz - 18 -->

let zero = Number (0);

let one = new Number(1);

if(zero) {
    console.log("zero True");
} else {
    console.log("zero False");
}
Output:zero False

if(one) {
    console.log("One True");
} else {
    console.log("One False");
}
One True


<!-- JS quiz - 19  -->

console.log(Math.max([1,2,3]))
NaN

console.log(Math.max.apply(null, [1,2,3]))
3

<!-- Reason - Math.max() accepts zero or more number as parameters. Then it return the max out of it.
But in first case, we are trying to find the max out of an array. So it console it as NaN(not a number).
In second case, we are calling max() with the help of apply(). apply() accepts an array and it applies the array as parameters to the actual function. So it behave as spreading array as parameters to max() that's why it is returning 3 as max element. -->

<!-- JS quiz -20 -->
var a = 1;

(function () {
    console.log(a);
    var a =2;
    console.log(a);
})()
Output:
undefined
2

var a = 1;

(function () {
    console.log(a);
    a =2;
    console.log(a);
})()
Output:
1
2

<!--JS quiz -21  -->
<!-- Using fill method , we can add  value based on the start and ending index numbers
 array.fill(value, start, end) -->

var numArr = [1,2,3,4];

numArr.fill(5,0,1);
console.log(numArr)
(4) [5, 2, 3, 4]

<!-- JS quiz -22 -->

const items = ["item", "item2","item3", "item4","item5"]

const [,,...restItems] = items

console.log(restItems)
['item3', 'item4', 'item5']

<!-- JS quiz - 23 -->
const employee = {
    id: 1,
    name:"jhon",
    salary:5000
}

const format = JSON.stringify(employee, null, 2)

console.log(format)
Output:
{
  "id": 1,
  "name": "jhon",
  "salary": 5000
}

<!--  JS quiz - 24 -->
Method-1 :Not good because reverse() mutates the original array

const names = ['alen', 'walker', 'Charlie']

const reversed = names.reverse()

console.log(names)
['Charlie', 'walker', 'alen']

console.log(reversed)
['Charlie', 'walker', 'alen']

Method: Using spread operator

const names = ['alen', 'walker', 'Charlie']

const reversed = [...names].reverse()

console.log(names)
['alen', 'walker', 'Charlie']

console.log(reversed)
 ['Charlie', 'walker', 'alen']

<!-- JS quiz - 25 -->

const printName =(name:string):voide=>{
    console.log(name)}
}
console.log(printName('Nag'))

Output:
Nag, Undefined

<!-- JS quiz - 26 -->
<!-- Using 𝗱𝗲𝘀𝘁𝗿𝘂𝗰𝘁𝘂𝗿𝗶𝗻𝗴 you can easily extract the information from the object.

This helps a lot when you want to get specific keys from the data you have obtained from the API. -->

const person = {
    name:'Nag',
    age:25,
    friends: ['Stackoveflow', 'Youtube', 'Udemy','Medium Blogs']
};

const {name , friends }  = person;

console.log(name)
Output: Nag

console.log(friends)
Output: ['Stackoveflow', 'Youtube', 'Udemy', 'Medium Blogs']

<!-- JS quiz - 27 -->

console.log( 10 < 20 < 30);
true

console.log(30 > 20 > 10)
false


<!-- JS quiz - 28 -->
<!-- How to VALIDATE an empty string in Javascript?-->

const isEmpty  = (string) => {
    if(string.trim() === '') return true;
    else return false
};

<!-- shorthand -->
const isEmpty  = (string) => {
    return string.trim() ===''
};

const username = ""
const age = "23"

console.log(isEmpty(username))
Output:true

console.log(isEmpty(age))
Output:false

<!-- JS quiz - 29 -->
<!-- You can use the String.prototype.repeat() method to create a string consisting of a repeated sequence of another string.
 -->

const sentence = "and over";

const output = `Repeat it over $(sentence.repeat(4)}again.`;

<!-- Repeat it over and over and over and over and over again -->

<!-- JS quiz - 30  -->
<!-- a object is reference type vale that is stored in a heap and the variable acts as pointer to the same value stored in that heap , so if one variable trys to change that stored value it will be changed for all pointers.

Just like five persons pointing towards an real life object so when object change , it will be changed for all. -->

let c= { greeting:'Hey!' };

let d;

d= c;
{greeting: 'Hey!'}
c.greeting = 'Hello';
'Hello'
console.log(d.greeting)
Hello


<!-- JS quiz - 31  -->


function calculateSum (x, y, z) {
    return x + y + z;
}
const numbers = [1,2,3];

console.log(calculateSum(...numbers))
6

<!-- JS quiz - 32 -->
<!-- 𝐎𝐛𝐣𝐞𝐜𝐭.𝐢𝐬() - A good solution for the looseness of equality comparisons in javascript  -->
<!-- the Object.is() method determines whether two values are the same value. the Object.is() behaves like === operator except it's behaviour with signes zeros and NaN -->

console.log(NaN === NaN)
false

console.log(Object.is(NaN, NaN))
true

console.log( +0 === -0)
true

console.log(Object.is(+0, -0))
false

console.log(-0 === 0)
true

console.log(Object.is(-0, 0))
VM6150:1 false

<!-- JS quiz - 33  -->

const props = [ 
    {name:'Vicky', age:24},
    {name:'Sai', age : 22},
    {name: 'Ram', age : 26},
    ]

const [, {name},] = props 
<!-- In shorthand and for readability -->
const {name} = props[1]
console.log(name)
Output: Sai

<!-- JS quiz - 34 -->

const user = {
    firstName:'Nag',
    lastName:'Sai',
    private:true
}
const { private, ...updateUser} = user
console.log(updateUser)
Output: {firstName: 'Nag', lastName: 'Sai'}

<!-- JS quiz - 35 -->
<!-- use.groupeBy() to group objects in an array based on a given property  -->
<!-- Note: .groupeBy() isonly supported in Firefox Nightly at preset -->
const items = [
    { name: 'bananas', type: 'fruit'},
    { name: 'goat', type: 'meat'},
    { name: 'cherriew', type: 'fruit'}
]
const grouped = items.groupBy(((type)) => type);

console.log(grouped);

output:
{
    fruit :[
        { name: "bananas", type: "fruit"},
        { name: "cherriew", type: "fruit"}
    ],
    meat :[
        { name: "cherriew", type: "fruit"}
    ]
}
    
<!--JS quiz - 36  -->
<!-- We can do deep copy of a reference data type using JSON.stringify() and JSON.parse() methods -->
<!-- When we use this method, we are simply converting our object to a string(stringify) and then immediately converting it back to an object(parse) -->

let obj = {
    name:"nag",
    age: 25,
    hobbies: ["swimming", "badminton", "coding"],
}

let copyObj = JSON.parse(JSON.stringify(obj));

copyObj.hobbies[1] = "walking";
'walking'
console.log(obj)
 output:
{name: 'nag', age: 25, hobbies: Array(3)}
age: 25
hobbies: (3) ['swimming', 'badminton', 'coding']
name: "nag"
console.log(copyObj)
output:
{name: 'nag', age: 25, hobbies: Array(3)}
age: 25
hobbies: (3) ['swimming', 'walking', 'coding']
name: "nag"

<!-- JS quiz - 37 -->
<!-- Reason - We are passing a number as argument in the function. In function, we are taking this argument and using the rest operator. It exactly take this argument and treated an array value becoz of rest operator. So inside the function, it will be like [21]. So when you are trying to find typeof of an array, it will give you object. -->
function getUserId(...args){
    console.log(typeof args);
}

getUserId(21)
object

<!-- JS quiz - 38 -->

<!-- The logical AND assignment (x &&= y) operator only assigns if x is truthy  
 The logical AND operator is evaluated left to right, it is tested for possible short-circuit evalution-->

<!-- old way -->
if(x) {
    x = 5;
}

<!-- es6 new way -->
x &&= 5;

<!-- JS quiz - 39 -->

<!-- add-to-cart.js component -->
window.addEventListener('add-to-cart', ({ detail}) => {
    addToCart(detail);
})

<!-- product-details.js component -->
const addToCartEvent = new CustomEvent('Add-to-cart', {
    detail :{
        item : 'Nokia 5.3',
        itemId: '450948640420',
    },
});

window.dispatchEvent(addToCartEvent)

<!-- JS quiz - 40 -->
const num = parseInt('5*4', 10);

console.log(num)
5
<!-- Answer - 5
Reason - parseInt(value, radix) is used to parse the string value into an integer. Here, value represents the string which need to be parsed and radix represent the number system to be used. Example parseInt('100', 2) here string need to be parsed from binary number to decimal number. '100' is the binary number which is equivalent to '4' in decimal.
As in the question, we have '5*4' which need to be convert into decimal number. As parsing starts it parse 5 then when it find * which is not a number. So parsing stop at that point and further characters will get ignored. So that's why answer will be 5. -->

 
<!-- JS quiz - 41 -->
const isValid = false
const age = 18
<!-- we can use spread operator (...) add properties to object-->
const person = {
    id:'mn43',
    name:'commander',
    ...(isValid && {isActive : true }), // (false && (isActive:true))
    ...((age>=18 || isValid) && {cart: 0}) // (true && {cart:0})
}

console.log(person)
Output:
{id: 'mn43', name: 'commander', cart: 0}

<!-- JS quiz - 42 -->

<div onclick="console.log('div')">
    <p onclick="console.log('p')">
    Click here!
    </p
</div>
<!-- Answer is p, div. During event propagation, there are 3 phases: capturing, target, and bubbling. By default, event handlers are executed in the bubbling phase (unless you set useCapture to true). It goes from the deepest nested element outwards. -->
Answer: is p,div 

<!-- JS quiz - 43 -->
<!--🚀 𝗧𝗵𝗲 𝗲𝗮𝘀𝗶𝗲𝘀𝘁 𝘄𝗮𝘆 𝘁𝗼 𝘀𝗼𝗿𝘁 𝗻𝘂𝗺𝗯𝗲𝗿𝘀 𝗶𝗻 𝗮𝗿𝗿𝗮𝘆 𝗶𝘀 𝘂𝘀𝗶𝗻𝗴 𝘁𝗵𝗲 𝘀𝗼𝗿𝘁 () 𝗺𝗲𝘁𝗵𝗼𝗱 𝘄𝗶𝘁𝗵 𝗰𝗼𝗺𝗽𝗮𝗿𝗲 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻   -->
let numbers = [1,4,5,3,2]
numbers.sort((a,b) => b - a);
Output:[5, 4, 3, 2, 1]

numbers.sort((a, b) => a- b)
console.log(numbers)
Output:[1, 2, 3, 4, 5]

<!-- JS quiz - 44 -->
<!-- The nullish coalescing operator will return its right-hand operand when the left side is null or undefined. Not just falsy.

When working with numbers, this is typically very useful. -->

let price_1 = 0;
let price_2;

<!-- not recommanded way -->
<!-- Assign a default if "price" is not set -->
const defaultPrice_1 = price_1 || 10;
const defaultPrice_2 = price_2 || 5;

console.log(defaultPrice_1); // 10
console.log(defaultPrice_2); //5

<!-- It will work perfectly -->
let price_1 = 0;
let price_2;

<!-- Assign a default if "price" is not set -->
const defaultPrice_1 = price_1 ?? 10;
const defaultPrice_2 = price_2 ?? 5;

console.log(defaultPrice_1); // 10
console.log(defaultPrice_2); //5



