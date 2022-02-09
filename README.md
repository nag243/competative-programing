# Javascript Quiz's and challanges - February

JS Quiz - 1

<!-- we can't compare object like below, we are comparing different memory location insted of element value -->

console.log([1,2]==[1,2]);
console.log([1,2]===[1,2]);

<!-- Ouput : false, false -->
<!-- so if we want to compare two arrays , we can convert in into string -->
a.toString()===b.toString();,
<!-- I used following command to check equality in JS: -->

let isArraysEqual=((a, b)=>
   !! a && !!b && a.length===b.length && a.every((ele,i) =>  b[i]=== ele));

<<<<<<< HEAD
JS Quiz -2

if([0]){
   console.log("true")
  }
  else{
   console.log("false")
  }


  if(0){
   console.log('true')
  }
  else{
   console.log('false')
  }

  <!-- Output:true, false -->

<!-- Since first one is array and 0 is an element in it so it will return true. But for the second one 0 will fall into falsy value so it will return false. -->

<!-- JS Quiz -3 -->
console.log([1,2] + [3,4])

<!-- it will be 1,23,4 due to JavaScript's type conversion since we can't directly add two arrays unless we are referring to its elements. what we are doing is [1,2].toString() + [3,4].toString() it becomes a total string "1,2"+"3,4" = 1,23,4 -->
Output:1,23,4

<!-- How to Empty an array -->

arrayList.length = 0;

arrayList =[];

arrayList = [1,2,3,4,5];

arrayList.splice(0, arrayList.lenth);

while(arrayList.lenght) {
  arrayList.pop();
}

<!-- JS Quiz - 5 -->

console.log(typeof null)

console.log(typeof undefined)

<!-- Output:  -->
Object
undefined

<!-- In JavaScript, While logging multiple variables, keeping track of individual variables can become difficult. Either we have to write them with different console.log() or give them specific strings.

Using object literal comes in handy here -->

let a  =10;
let b = 20;

console.log(a,"a");
10 'a'

console.log(b,"b")
20 'b'

let a =10;
let b = 20;
// using object literal 
console.log({a}, {b} );
{a: 10} {b: 20}


<!-- JS Quiz -6 -->
<!-- Object keys are automatically converted into strings. We are trying to set an ***object as a key*** to object a, with the value of 123.
However, when we stringify an object, it becomes "[object Object]". So what we are saying here, is that a["[object Object]"] = 123. Then, we can try to do the same again. c is another object that we are implicitly stringifying. So then, a["[object Object]"] = 456. Then, we log a[b], which is actually a["[object Object]"]. We just set that to 456, so it returns 456. -->

const a = {};
const b = { key: 'b' };
const c = { key: 'c' };
a[b] = 123;
a[c] = 456;
console.log(a[b]);

<!-- Output: 456 -->



<!--The var keyword, this value was ***global***. During the loop, we incremented the value of i by 1 each time, using the unary operator ++. By the time the setTimeout callback function was invoked, i was equal to 3 in the first example  -->

for(var i = 0; i < 3; i++) setTimeout(()=>console.log(i),1);
for(let i = 0; i < 3; i++) setTimeout(()=>console.log(i),1);

<!-- 3,3,3  and 0,1,2 -->

<!-- JS quiz -7 -->
<!-- As the inner function with callback is immediately invoked, so the returned value(0) from the callback will be the final answer. -->

function sayHi() {
return (() => 0)();
}
console.log(typeof sayHi());

Output: number







