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

<!-- JS Quiz - 8 -->
String.prototype.printData = () => {
 return 'Printing data';
};

const data = 'Instagram';

data.printData();

Output:Printing data

<!-- JS Quiz - 9 -->

const props = [
  {age:23, name:'abreh'},
  {age:27, name:'Yonas'},
  {age:25, name:'sara'}
];
const [, {name},]=props;
console.log(name)

Ouput:Yonas


<!--  Js Quiz - 10 -->

const dynamic = 'flavor';
var item = {
    name:'Biscuit',
    [dynamic]: 'Chocolate'
}

console.log(item)
Output: {name: 'Biscuit', flavor: 'Chocolate'}


<!-- JS Quiz - 11 -->

<!-- The string is a value type, so calling .toUpperCase() returns an uppercased version of the original value, but won’t mutate the original value in memory like we can for reference types. -->

let myString = "hello world"
myString.toUpperCase()
console.log(myString.split(" "))

Output: ['hello', 'world']

<!-- JS Quiz - 12 -->

<!-- In JavaScript object is a reference type so we can easily modified value -->

const USER = {
    'Name': 'Nag',
    'age': 25
};
USER.age = 27;
console.log(USER.age)

Output: 27

<!-- JS Quiz -13 -->

<!-- 𝗜𝗻 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁,𝘉𝘰𝘵𝘩 𝘪𝘯𝘵𝘦𝘨𝘦𝘳 𝘢𝘯𝘥 𝘴𝘵𝘳𝘪𝘯𝘨 𝘵𝘺𝘱𝘦𝘴 𝘤𝘢𝘯 𝘶𝘴𝘦 𝘵𝘩𝘦 𝗰𝗼𝗻𝗰𝗮𝘁𝗲𝗻𝗮𝘁𝗶𝗼𝗻 𝘰𝘱𝘦𝘳𝘢𝘵𝘰𝘳 (+). 𝘈𝘴 𝘢 𝘳𝘦𝘴𝘶𝘭𝘵, 𝘪𝘧 𝘰𝘯𝘦 𝘰𝘧 𝘵𝘩𝘦 𝘰𝘱𝘦𝘳𝘢𝘯𝘥𝘴 𝘪𝘴 𝘰𝘧 𝘵𝘩𝘦 𝘴𝘵𝘳𝘪𝘯𝘨 𝘵𝘺𝘱𝘦, 𝘣𝘰𝘵𝘩 𝘰𝘱𝘦𝘳𝘢𝘯𝘥𝘴 𝘢𝘳𝘦 𝘤𝘰𝘯𝘤𝘢𝘵𝘦𝘯𝘢𝘵𝘦𝘥 𝘢𝘴 𝘴𝘵𝘳𝘪𝘯𝘨𝘴. 𝘛𝘩𝘦 𝘴𝘶𝘣𝘵𝘳𝘢𝘤𝘵(-) 𝘰𝘱𝘦𝘳𝘢𝘵𝘰𝘳, 𝘰𝘯 𝘵𝘩𝘦 𝘰𝘵𝘩𝘦𝘳 𝘩𝘢𝘯𝘥, 𝘵𝘳𝘪𝘦𝘴 𝘵𝘰 𝘵𝘳𝘢𝘯𝘴𝘧𝘰𝘳𝘮 𝘵𝘩𝘦 𝘰𝘱𝘦𝘳𝘢𝘯𝘥𝘴 𝘵𝘰 𝘢 𝘯𝘶𝘮𝘣𝘦𝘳 𝘵𝘺𝘱𝘦. -->

console.log(4+'3')
console.log(4-'3')

Output:
43
1

<!-- Shuffle Array JS quiz - 14 -->

let arr = [5, 24, 120, -23, 4, 5, -34, 98]
const shuffleArray = (arr) => arr.sort(() =>Math.random() - 0.5);
console.log(shuffleArray(arr));
Output: [-23, 5, 4, 98, 5, 24, -34, 120]

<!-- JS quiz -15 -->

for(let i = 0; i<4; i++){
    if(i==2)
        continue
    console.log(i)
}

Output: 0,1,3


<!--  JS quiz - 16-->

const myMoney = {
    quarters:4,
    dimes: 10,
    nickels:20,
    pennies: 100
}
for(const coin of myMoney){
    console.log(`${coin} : ${myMoney[coin]}`);
}

Output: myMoney is not iterable 

<!-- JS quiz - 17 -->
<!-- 𝘃𝗮𝗿 𝗮𝗻𝗱 𝗹𝗲𝘁 𝘢𝘳𝘦 𝘣𝘰𝘵𝘩 𝘶𝘴𝘦𝘥 𝘧𝘰𝘳 𝘷𝘢𝘳𝘪𝘢𝘣𝘭𝘦 𝘥𝘦𝘤𝘭𝘢𝘳𝘢𝘵𝘪𝘰𝘯 𝘪𝘯 𝘫𝘢𝘷𝘢𝘴𝘤𝘳𝘪𝘱𝘵 𝘣𝘶𝘵 𝘵𝘩𝘦 𝘥𝘪𝘧𝘧𝘦𝘳𝘦𝘯𝘤𝘦 𝘣𝘦𝘵𝘸𝘦𝘦𝘯 𝘵𝘩𝘦𝘮 𝘪𝘴 𝘵𝘩𝘢𝘵 𝘷𝘢𝘳 𝘪𝘴 𝘧𝘶𝘯𝘤𝘵𝘪𝘰𝘯 𝘴𝘤𝘰𝘱𝘦𝘥 𝘢𝘯𝘥 𝘭𝘦𝘵 𝘪𝘴 𝘣𝘭𝘰𝘤𝘬 𝘴𝘤𝘰𝘱𝘦𝘥.
𝘐𝘵 𝘤𝘢𝘯 𝘣𝘦 𝘴𝘢𝘪𝘥 𝘵𝘩𝘢𝘵 𝘢 𝘷𝘢𝘳𝘪𝘢𝘣𝘭𝘦 𝘥𝘦𝘤𝘭𝘢𝘳𝘦𝘥 𝘸𝘪𝘵𝘩 𝘷𝘢𝘳 𝘪𝘴 𝘥𝘦𝘧𝘪𝘯𝘦𝘥 𝘵𝘩𝘳𝘰𝘶𝘨𝘩𝘰𝘶𝘵 𝘵𝘩𝘦 𝘱𝘳𝘰𝘨𝘳𝘢𝘮 𝘢𝘴 𝘤𝘰𝘮𝘱𝘢𝘳𝘦𝘥 𝘵𝘰 𝘭𝘦𝘵 -->

for (let i = 0; i<3; i++){
    setTimeout(() => console.log(i), 1);
}

for (let i = 0; i<3; i++){
    setTimeout(() => console.log(i), 1);
}

Output:333, 013

<!-- Check if variable is object or not -->
function isObject(obj) {
    return obj != null && obj.constructor.name === "Object"
}

console.log(isObject({}))
Output: true
console.log(isObject([]))
Output: false
console.log(isObject(null))
Output: false


<!-- JS quiz - 18 -->

console.log(0 || 1);
console.log(1 || 2);
console.log(0 && 1);
console.log(1 && 2);

Output:
1
1
0
2


<!-- JS quiz - 19 -->
<!-- The return function acts as a closure which contains a as 21 from the outer function -->

(function (a) {
    return (function () {
        console.log(a)
        a=6;
    })()
})(21)

Output: 21

<!-- Check if the word is palindrome  -->

let word = 'madam'
word === word.split('').reverse().join('')
Output : true
