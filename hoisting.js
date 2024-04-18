// This is for learning the hoisting concept
// IN JS variables and functions are hoisted but function expressions and assignments are not hoisted
// Hoisting refers to as JS Which Moves All Declarations To The Top Of Their Local Or Global Scope During The Compilation Phase. It Allows Calling Functions Before They Appear In The Code.


console.log(myFunction());
function myFunction() {
    return 'Hello, world!';
  }

console.log(myClass); //ReferenceError
class myClass{};
// Reason:-  like 'let' and 'const', 'class' declarations are block-scoped and thus can't hoist to the top of their enclosing block.

var MyClass = class Klass {
    // methods go here  //ReferenceError
};
// if console the Kclass is would throw an error because it has scope to this function only

// var is hoisted and hence can throw the undefined error however let and const are not hoisted and will throw the reference error
console.log(v);
var v = 12;

console.log(l);
const l = 12;
console.log(c);
let c = 12;
