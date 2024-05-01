// //16 : More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// //• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.



let Guest_list :string [] = ['shahid afridi','Baber Azam','shaheenafridi']

// for(let i = 0; i<Guest_list.length; i ++ ) 
// {
    
//     console.log('Dear Mr.' + Guest_list[i] +',\n\n it is our pleasure to invite you in our party.\n\nthank you!\n\n ')

// }

let absent_Guest:string = "shahid afridi"

let new_Guest:string = "sarfaraz"

Guest_list[0] = new_Guest;

for(let i = 0; i<Guest_list.length; i ++ ) 
{
    
    console.log('Dear Mr.' + Guest_list[i] +',\n\n it is our pleasure to invite you in our party.\n\nthank you!\n\n ')

}

console.log
(`Mr ${absent_Guest}is not coming to the party`);

console.log('Good news! we find big tableso we are inviting 3 more guests.')

Guest_list.unshift('shoib malik');
Guest_list.splice(2 , 0 );
Guest_list.push('asif')


for(let i = 0; i<Guest_list.length; i ++ ) 
{
    
    console.log('Dear Mr.' + Guest_list[i] +',\n\n it is our pleasure to invite you in our party.\n\nthank you!\n\n ')

}