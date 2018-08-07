'use strict';

// Get the user's name
var username = prompt('Hello, what is your name?');
alert('Nice to have you here, ' + username + ' I\'m going to ask you some quesitons about me.  So feel free to answer y/n or yes/no.');

// Ask them five y/n quesitons
var correctCounter = 0;

var answerOne = prompt('Do I have any pets?').toLocaleLowerCase();
console.log('User entered answerOne as: ' + answerOne);
if (answerOne === 'y' || answerOne === 'yes') {
    alert('Yeah! That\'s right. Her name is Scoutdog.');
    correctCounter++;
}
else {
    alert('Nope... you\'re way off!');
}

var answerTwo = prompt('Am I from California?').toLowerCase();
console.log('User entered answerTwo as: ' + answerTwo);
if (answerTwo === 'n' || answerTwo === 'no') {
    alert('Nice! You got it!')
    correctCounter++;
}
else {
    alert('Sorry, that\'s not correct.');
}

var answerThree = prompt('Now a harder one... Am I married?').toLowerCase();
console.log('User entered answerThree as: ' + answerThree);
if (answerThree === 'n' || answerThree === 'no') {
    alert('Sadly, yes... you are correct.');
    correctCounter++;
}
else {
    alert('Thanks, but sorry... that\'s not right.');
}

var answerFour = prompt('Let\'s do an easier one... Do I have black hair?').toLowerCase();
console.log('User entered answerFour as: ' + answerFour);
if (answerFour === 'n' || answerFour === 'no') {
    alert("Awesome!! You are correct!");
    correctCounter++;
}
else {
    alert('Sorry, no.. my hair is brown');
}

var answerFive = prompt('Ok ' + username + ' Last question. Is my last name \"Borda\"?').toLowerCase();
console.log('User entered answerFive as: ' + answerFive);
if (answerFive == 'y' || answerFive == 'yes'){
    alert('Impressive!! You\'re right. Good job.');
    correctCounter++;
}
else {
    alert('No ' + username + ' my last name is "Borda".');
}

console.log('correctCounter is at: ' + correctCounter);
alert(username + ', you got ' + correctCounter + ' answers correct.');
if (correctCounter <= 1) {
    alert('Better luck next time ' + username + '!!');
}
else if (correctCounter <= 3) {
    alert('Pretty good ' + username + '!!');
}
else  {
    alert('You\'re on top of this ' + username + '!!');
}


