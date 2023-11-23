// Array functions [1,2,3,4,5,6,7,8]

// Array.at() takes an integer and return the value at that index of an array
let testing = [1,2,3,4,5,6,7,8];
console.log(testing.at(2));

// Array.concat() -> Is used to merge two or three arrays.
let checking  = [1,2,3,4,5,6,7,8];
let checking2 = [9,10,11];
let checking3 = checking.concat(checking2);
console.log(checking3 , "<=====This is the result of CONCAT function=====>")

// Array.copyWithin() -> function shallow copies part of this array to another location in the same array.
let test  = [1,2,3,4,5,6,7,8];
console.log(test.copyWithin(1,3) , "<=====This is the result of COPYWITHIN function=====>");

// Array.entries() instances returns a new array iterator object that contains the key/value pairs for each index in the array.
let test2 = ['a','b','c'];
const iterator1 = test2.entries();
console.log(iterator1.next().value , "<=====This is the result of ENTRIES function=====>");

//Array.every instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. 
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold) , "<=====This is the result of EVERY function=====>");

// Array.map() is used to iterate over the elements of an array and call a specific function on each element in the array. it is a non mutating method
let testMap = [1,2,3,4,5,6];
let newTest = testMap.map((elem, index)=> {
return {key:index , value:elem+elem}
})
console.log(newTest , "<=====This is the result of MAP function=====>")

// Array.forEach() iterates over each element of an array and executes the function once on each element of that array.
let testForEach = [1,2,3,4,5,6];
testForEach.forEach((element)=> {
    console.log(element * element, '<======This is the result of the FOREACH function')
}) 

//findIndex() instances returns the index of the first element in an array that satisfies the provided testing function.
const arr = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(arr.findIndex(isLargeNumber));
// Expected output: 3

//The findLast() method of Array instances iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function.
const findLast = [5, 12, 50, 130, 44];
const found = findLast.findLast((element) => element > 45);
console.log(found);
// Expected output: 130

//The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. 
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());