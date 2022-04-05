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

// function reversearray(x) {
//     return x.reverse()
// }
// console.log(reversearray([1, 2, 3 , 4, 5]))

const reversearray = x => x.reverse()
console.log(reversearray([1, 2, 3, 4, 10]))
//NOTE Arrow function^^^

//create a function that accepts an array and return the last element
//Example: lastElement(["EC", 3, "left", "Phoenix"])

function lastelement(array3) {
        return array3.pop()
}
console.log(lastelement(["Ec", 2, "twenty", 12, "banana"]))
//arr.length -1
//pop()

//create a function that takes an array and returns it as a string

function arraytostring(arr) {
    return arr.join('')
}
console.log(arraytostring(["Ec", 12, "four"]))
//TODO Study this nonsense

//create a function that takes an array and return the data tupes of the array values in a new array
  
