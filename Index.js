console.log('Working')

const numbers = [0,1,2,3,4,5,6,7,8,9]

const numberPositions = [4,5,8]

let numberOfClicks = 0;

const onClick = () =>{
    if(numberOfClicks >=2 ) return;
    numbers[numberPositions[numberOfClicks]] = Math.floor((Math.random() * numbers.length));
    numberOfClicks += 1;
    console.log(numbers)
}
console.log(numbers)
