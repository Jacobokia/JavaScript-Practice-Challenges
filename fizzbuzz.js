//Write a function named fizzBuzz that takes in two(2) parameters which are expected to be strings. The function should return the string Fizz if the combined length of the parameters is divisible by 3, the string Buzz if it is divisible by 5, and the string FizzBuzz if it is divisible by both 5 and 3.

function fizzbuzz(firstString, secondString) {

    let combinedLength = firstString.length + secondString.length
    if (combinedLength % 3 === 0 && combinedLength % 5 === 0) {
        return "fizzbuzz"
    }
    else if (combinedLength % 3 === 0) {
        return "fizz"
    }
    else if (combinedLength % 5 === 0) {
        return "buzz"
    }
    else {
        return "It is not a valid number"
    }
}

console.log(fizzbuzz(12, 6))