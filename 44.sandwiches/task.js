"use strict";
//44: Sandwiches: Write a function that accepts a array of items a person 
// wants on a sandwich. The function should have one parameter that collects as
//  many items as the function call provides, and it should print a summary of 
//  the sandwich that is being ordered. Call the function three times,
//  using a different number of arguments each time.
function makeSandwich(item) {
    console.log('\nmaking your sandwich with:');
    item.forEach(element => console.log("  " + element));
    console.log('enjoy your sandwich !\n');
}
makeSandwich(["bread", "mayo", "salad"]);
makeSandwich(["chiken", "butter", "kechup"]);
makeSandwich(["penut butter", "jam", "jelly"]);
