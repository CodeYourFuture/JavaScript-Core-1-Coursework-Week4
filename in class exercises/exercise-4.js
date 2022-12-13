//You have the following functions:
function hello(teamMember) {
    console.log("Hello " + teamMember);
}

function notifyPeople(team) {
    for(teamMember of team) {
        hello(teamMember);
        goodBye(teamMember);
    }
}

//First, try and understand what these functions do.
 
//notifyPeople(hello("Mehreen"));

let team = ["Mehreen", "Vitalina", "Shayann", "Karleen"];

hello("Mehreen");
notifyPeople(team);

// Create a new function called goodBye - which will be similar to the hello function, except it will output “Good bye <team member>”
// Modify the notifyPeople function - so we can decide whether we want to say “Hello” or “Good bye” to each of the team members, whenever we call the function
// Hint: notifyPeople will need to accept a function as an argument

function goodBye(team) {
    console.log("Goodbye " + teamMember);
}

