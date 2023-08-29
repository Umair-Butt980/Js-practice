// Array functions [1,2,3,4,5,6,7,8]

// Array.at() takes an integer and return the value at that index of an array
let testing = [1,2,3,4,5,6,7,8];
console.log(testing.at(2));

// Array.concat() -> Is used to merge two or three arrays.
let checking  = [1,2,3,4,5,6,7,8];
let checking2 = [9,10,11];
let checking3 = checking.concat(checking2);
console.log(checking3)

// Array.copyWithin() -> function shallow copies part of this array to another location in the same array.
let test  = [1,2,3,4,5,6,7,8];
console.log(test.copyWithin(1,3));

// Array.entries() instances returns a new array iterator object that contains the key/value pairs for each index in the array.
let test2 = ['a','b','c'];
const iterator1 = test2.entries();
console.log(iterator1.next().value);

//Array.every instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. 
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));
