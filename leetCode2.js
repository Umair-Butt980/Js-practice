// Check if the number is palindrome examples are 121 , 01

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = x.toString();
    const reversedStr = str.split('').reverse().join('');
    console.log(reversedStr , '<++++++CHECKING+++>')
    // return str === reversedStr;
    console.log(str === reversedStr , '<++++++CHECKING+++>')

};

isPalindrome(321);