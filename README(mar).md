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