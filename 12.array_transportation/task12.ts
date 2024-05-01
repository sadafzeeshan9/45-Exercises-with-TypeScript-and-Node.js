
// 12 : Greetings: Start with the array you used in Exercise 11, but instead of 
//just printing each person’s name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the person’s name.




var  Names : string [] = [ 'huma' , 'saba' , 'hina' , 'sana' , 'kanwal']

const message : string = ' welcome to typescript class: '

for (let i = 0; i < Names.length; i++) {
    console.log(message + Names [i] );
    
}