// JS Quiz - 1

// when you pass 'func' to setTimeout it is not referring 'func' variable,
//  instead to the original function itself (which func was pointing at that time)
let func = () => {
    console.log(1)
}
setTimeout(func, 100)
func = () => {
    console.log(2)
}

// JS Quiz - 2 
//Trucate numbers in JS
console.log(~~47.11) //47

console.log(~~1.9999) //1

console.log(~~3) //3

// works with 32 bit integer. so if over maximum 32-bit integer
console.log(2147883647 + 1000)
2147884647

// all non-number converts tot 0
console.log(~~[]) //0
console.log(~~NaN) //0
console.log(~~null) //0
