//21 : They think of something you could store in a TypeScript 
//Object. Write a program that creates Objects containing these items.

//we just store one value/name

let personName : string = "sadaf zeeshan" ;


console.log(personName)

//other wise when we declear  many name /or value we make objact
interface person {
    name : string,
    age : number,
    nationality : string,
    student : boolean
}


let person = 
  {
    name : "sadaf zeeshan",
    age : "35",
    nationality: "pakistan" , //key value pair hote hen ye
    student : "true"
  }

  console.log(person)