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









