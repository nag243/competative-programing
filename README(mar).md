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