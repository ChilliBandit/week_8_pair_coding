//TODO create a function that takes an array containing only numbers and return the first element
// example: getarrelement([1, 2, 3, 4]) ->1

<<<<<<< HEAD
// function getarrelement([arr]) {
//      return arr[0]
// }
// console.log(getarrelement([1, 2, 3, 4]));
=======
>>>>>>> d57bb41c2920b4603d066040d9b9461e08ac9aee

// function getarrelement([arr]) {
//      return arr[0]
// }

<<<<<<< HEAD
const getarrelement1 = arr => arr[0]
//NOTE Arrow function ^^^
console.log(getarrelement1([1, 2, 3, 4]))
=======
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
<<<<<<< HEAD
>>>>>>> d57bb41c2920b4603d066040d9b9461e08ac9aee
=======
//NOTE "arguments" are the values declared within a function. In this case, they are "a" and "b"

//Write a function to reverse an array 
//Example: reverseArray([1, 2, 3, 4]) -> [4, 3, 2, 1]

// function reversearray(x) {
//     return x.reverse()
// }
// console.log(reversearray([1, 2, 3 , 4, 5]))

const reversearray = x => x.reverse()
console.log(reversearray([1, 2, 3, 4, 10]))
<<<<<<< HEAD
>>>>>>> 31ef189dfb3c4113f77674a66a05d9f43d978c91
=======
//NOTE Arrow function^^^

//create a function that accepts an array and return the last element
//Example: lastElement(["EC", 3, "left", "Phoenix"])

function lastelement(array3) {
        return array3.pop()
}
console.log(lastelement(["Ec", 2, "twenty", 12, "banana"]))
//arr.length -1
//pop()
>>>>>>> 84651e1d8516d6b7eab485379f187dbc9bf56a21
