//18: Seeing the World: Think of at least five places in the world you’d like to visit
// • Store the locations in a array. Make sure the array is not in alphabetical order.


let fav_Places :string [] = ['khane_kaba','madina','turky','burj-khalifa','oman']

// • Print your array in its original order.

console.log('orignal ' + fav_Places);

// • Print your array in alphabetical order without modifying the actual 

console.log('copy ' +[...fav_Places].sort());

// • Show that your array is still in its original order by printing it.

console.log('orignal ' +fav_Places);

// • Print your array in reverse alphabetical order without changing the order of the original list.

console.log('copy ' +[...fav_Places].sort().reverse());

// • Show that your array is still in its original order by printing it again.

console.log('orignal ' +fav_Places.reverse());

// • Reverse the order of your list. Print the array to show that its order has changed.

console.log('orignal ' +fav_Places.sort());

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(fav_Places.sort().reverse());
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('orignal ' + fav_Places);





