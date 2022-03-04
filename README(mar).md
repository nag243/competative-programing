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