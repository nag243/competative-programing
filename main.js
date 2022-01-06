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


//Generate random Boolean values by using 𝗠𝗮𝘁𝗵.𝗿𝗮𝗻𝗱𝗼𝗺() function.
// 𝗠𝗮𝘁𝗵.𝗿𝗮𝗻𝗱𝗼𝗺() generates random floating-point values range between 0 to 1.
// By checking middle value like 0.5 we can get probability of both true and false.
// Using <=, >= , < or >


function germathrandom(){
    return Math.random() >= 0.5;
}

germathrandom()

