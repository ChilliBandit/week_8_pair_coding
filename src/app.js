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