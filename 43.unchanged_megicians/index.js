"use strict";
//43: Unchanged Magicians: Start with your work from Exercise 40. Call the function 
// make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the
//  original names and one array with the Great added to each magician’s name.
let magician = ['Harry Houdini', 'Criss Angel', 'David Blaine', '  Derren Brown', 'Dynamo'];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicianarray) {
    for (let i = 0; i < magicianarray.length; i++) {
        magicianarray[i] = 'the great ' + magicianarray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(Element => {
        console.log(Element);
    });
}
const copymagicionarray = copyArray(magician);
make_great(copymagicionarray);
console.log('this is my original Array:');
show_magicians(magician);
console.log('this is my modified copy of the array:');
show_magicians(copymagicionarray);
