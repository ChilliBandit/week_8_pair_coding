//TODO create a function that takes an array containing only numbers and return the first element
// example: getarrelement([1, 2, 3, 4]) ->1


// function getarrelement([arr]) {
//      return arr[0]
// }

const getarrelement = arr => arr[0]
console.log(getarrelement([1, 2, 3, 4]));
//NOTE Arrow function ^^^

//TODO Give two arguments, return an array which contains these two arguments
    //"return" always denotes the need for a function
function createarray(a, b) {
    var array = [a,b]

    return array
}
console.log(createarray(1, 2))
//NOTE "arguments" are the values declared within a function. In this case, they are "a" and "b"

//Write a function to reverse an array 
//Example: reverseArray([1, 2, 3, 4]) -> [4, 3, 2, 1]

// function reverseArray([a, b, c, d]) {
//     var array2 = [d, c, b, a]
//     return array2
// }
// console.log(reverseArray([1, 2, 3, 4, 5]))
//NOTE Providing parameters for the function, then a variable with the reversed parameters
    // We then ask the function to return the variable within the initial parameters provided

// function reversearray(x) {
//     return x.reverse()
// }
// console.log(reversearray([1, 2, 3 , 4, 5]))

const reversearray = x => x.reverse()
console.log(reversearray([1, 2, 3, 4, 10]))
