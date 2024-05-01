// 3 : Name Cases: Store a person’s name in a variable,
// and then print that person’s name in lowercase, uppercase, and titlecase.

let Name: string = "sadaf zeeshan"



console.log(Name.toUpperCase())

console.log(Name.toLowerCase())
console.log(Name.replace(/\b\w/g,c=>c.toUpperCase()))