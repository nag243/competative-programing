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


