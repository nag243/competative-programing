function multiply(x){
    return function(y){
        return x*y
    }
}
 console.log(multiply(2)(3))

 //parse int

 const num = parseInt('7*6', 10);
 
 console.log(num)

 //output = 7

// It parses the string and returns the first integer, hence num will have 7


