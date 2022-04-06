// //TODO create a function that takes an array containing only numbers and return the first element
// // example: getarrelement([1, 2, 3, 4]) ->1

// <<<<<<< HEAD
// // function getarrelement([arr]) {
// //      return arr[0]
// // }
// // console.log(getarrelement([1, 2, 3, 4]));
// =======
// >>>>>>> d57bb41c2920b4603d066040d9b9461e08ac9aee

// // function getarrelement([arr]) {
// //      return arr[0]
// // }

// <<<<<<< HEAD
// const getarrelement1 = arr => arr[0]
// //NOTE Arrow function ^^^
// console.log(getarrelement1([1, 2, 3, 4]))
// =======
// const getarrelement = arr => arr[0]
// console.log(getarrelement([1, 2, 3, 4]));
// //NOTE Arrow function ^^^

// //TODO Give two arguments, return an array which contains these two arguments
//     //"return" always denotes the need for a function
// function createarray(a, b) {
//     var array = [a,b]

//     return array
// }
// console.log(createarray(1, 2))
// <<<<<<< HEAD
// >>>>>>> d57bb41c2920b4603d066040d9b9461e08ac9aee
// =======
// //NOTE "arguments" are the values declared within a function. In this case, they are "a" and "b"

// //Write a function to reverse an array 
// //Example: reverseArray([1, 2, 3, 4]) -> [4, 3, 2, 1]

// // function reversearray(x) {
// //     return x.reverse()
// // }
// // console.log(reversearray([1, 2, 3 , 4, 5]))

// const reversearray = x => x.reverse()
// console.log(reversearray([1, 2, 3, 4, 10]))

// =======
// //NOTE Arrow function^^^

// //create a function that accepts an array and return the last element
// //Example: lastElement(["EC", 3, "left", "Phoenix"])

// function lastelement(array3) {
//         return array3.pop()
// }
// console.log(lastelement(["Ec", 2, "twenty", 12, "banana"]))
// //arr.length -1
// //pop()
// <<<<<<< HEAD
// >>>>>>> 84651e1d8516d6b7eab485379f187dbc9bf56a21
// =======

// //create a function that takes an array and returns it as a string

// function arraytostring(arr) {
//     return arr.join('')
// }
// console.log(arraytostring(["Ec", 12, "four"]))
// //TODO Study this nonsense

// //create a function that takes an array and return the data tupes of the array values in a new array
  
// >>>>>>> bb567612df22fc123d4a7d2cb2bff48f3183ac85

// <<<<<<< HEAD
// =======
// // function arrayvaluetypes(array4) {
// //    var newarray = [];

// //     for(var i = 0; i <array4.length; i++) {
// //         newarray[i] = typeof array4 [i]
// //     }

// //     return newarray
// // }

// const arrayvaluetypes = arrays => arrays.map(y => typeof y)


// console.log(arrayvaluetypes([]))
// >>>>>>> c0734ea9c9b8395467f4f04e059ed040ae4bdc1e

// function stringNumber(string1, string2){
//      if (string1 === string2) {
//           return true
//      }
//      else {
//           return false
//      }
// }

// console.log(stringNumber("hhh", "hah"))

// function compare(name1, name2) {
//      return name1.length === name2.length
// }

// console.log(compare("AB", "CD"))

//
//TODO Study this nonsense

//create a function that takes an array and return the data tupes of the array values in a new array
  //arrayvaluetypes(["EC", 2, "four", [], true]) ->[string, muber, string, object, boolean]

// function arrayvaluetypes(array4) {
//    var newarray = [];

//     for(var i = 0; i <array4.length; i++) {
//         newarray[i] = typeof array4 [i]
//     }

//     return newarray
// }

 /*  Write a function that coverts an object into an array
 example: objectToArray({a: "j", b:12, }) -> [["a", "j"],["b", 12]]
 */

 function objetcToArray(obj) {
      var arry = []
      for (var i in obj) {
      arry.push([i,obj[i]])
      }
      return arry
 }

 console.log(objetcToArray({a: "j", b: "12"}))


 //ES6

 const objToArr = obj => Object.entries(obj)