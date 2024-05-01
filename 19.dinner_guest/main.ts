// 19.  Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.


let Guest_list :string [] = ['shahid afridi','Baber Azam','shaheenafridi']

for(let i = 0; i<Guest_list.length; i ++ ) 
 {
    
     console.log('Dear Mr.' + Guest_list[i] +',\n\n it is our pleasure to invite you in our party.\n\nthank you!\n\n ')

 }

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

console.log(Guest_list)