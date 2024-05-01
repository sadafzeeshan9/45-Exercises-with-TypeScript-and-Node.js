//17 : Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.




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

console.log("un")