"use strict";
//Question 11: Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.
var Names = ['huma', 'saba', 'hina', 'sana', 'kanwal'];
const message = ' welcome to typescript class: ';
for (let i = 0; i < Names.length; i++) {
    console.log(message + Names[i]);
}
