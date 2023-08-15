// Array functions [1,2,3,4,5,6,7,8]

// Array.at() takes an integer and return the value at that index of an array
let testing = [1,2,3,4,5,6,7,8];
console.log(testing.at(2));

// Array.concat() -> Is used to merge two or three arrays.
let checking  = [1,2,3,4,5,6,7,8];
let checking2 = [9,10,11];
let checking3 = checking.concat(checking2);
console.log(checking3)