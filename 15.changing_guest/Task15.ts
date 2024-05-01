
// Question 15: Changing Guest List: One of your guests can't make it
//  to the dinner, so you need to send out a new set of invitations
//   with a replacement guest.







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
(`Mr ${absent_Guest}is not coming to the party`)