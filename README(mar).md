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