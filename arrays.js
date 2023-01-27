//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

let faveColors = ['red', 'green', 'black']
let colorCopy = faveColors.slice()
console.log(colorCopy)

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

colorCopy.push('Grey')

//////////////////PROBLEM 3///// jumn///////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

let numbers = [1, 2, 3, 4, 5]

let middleNums = numbers.slice(1, 4)


//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

let bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]

let answers = []

for (let i = 0; i< bigOrSmallArray.length; i++){
  if(bigOrSmallArray[i] > 100){
    answers.push('big')
  } else{
    answers.push('small')
  }
}

console.log(answers)