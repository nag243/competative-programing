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

   





