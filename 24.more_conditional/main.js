"use strict";
// 24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// equality and inequality test 1
console.log("equality test with string:", "Apple" === "Apple");
// equality and inequality test 2
console.log("Inequality test with string:", "Apple" != "Orange");
// Tests using the lower case function
console.log(" lower case function test:", "HELLO".toLowerCase() === "hello");
// Numerical tests involving equality and inequality,
console.log("equality test number :", "10" === "10");
// Numerical tests inequality
console.log("equality test number :", 10 != 20);
//greater than  test
console.log("equality test number :", 10 > 5);
//lessthen test
console.log("equality test number :", 10 < 5);
//greater than or equal to
console.log("greater than or equal to test :", 10 >= 10);
//less than or equal to
console.log("less than or equal to test:", 5 <= 10);
// Tests using "and"  operators
console.log("and operator test:", 4 === 4 && 10 > 5);
// Tests using  "or" operators
console.log("or operator test:", 4 === 4 || false);
//Test whether an item is in a array
const fruit = ['apple', 'mango', 'orange'];
console.log('testing "apple"in the array:', fruit.includes("apple"));
// • Test whether an item is not in a array
console.log('testing "banana"is not in  array:', !fruit.includes("banana"));
