"use strict";
//41:Magicians: Make a array of magician’s names. Pass the array to a function 
//called show_magicians(), which prints the name of each magician in the array.
let magician = ['Harry Houdini', 'Criss Angel', 'David Blaine', '  Derren Brown', 'Dynamo'];
function show_magicians(magicians) {
    magicians.forEach(Element => {
        console.log(Element);
    });
}
show_magicians(magician);
