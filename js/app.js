'use strict';

// Get the user's name
var username = prompt('Hello, what is your name?');
alert('Nice to have you here, ' + username + ' I\'m going to ask you some quesitons about me.  So feel free to answer y/n or yes/no.');

// sets the total correct ansers to 0
var correctCounter = 0;

// define question functions

function questionOne() {
  var answerOne = prompt('Do I have any pets?').toLocaleLowerCase();
  console.log('User entered answerOne as: ' + answerOne);
  if (answerOne === 'y' || answerOne === 'yes') {
    alert('Yeah! That\'s right. Her name is Scoutdog.');
    correctCounter++;
  }
  else {
    alert('Nope... you\'re way off!');
  }
}

function questionTwo() {
  var answerTwo = prompt('Am I from California?').toLowerCase();
  console.log('User entered answerTwo as: ' + answerTwo);
  if (answerTwo === 'n' || answerTwo === 'no') {
    alert('Nice! You got it!');
    correctCounter++;
  }
  else {
    alert('Sorry, that\'s not correct.');
  }
}

function questionThree() {
  var answerThree = prompt('Now a harder one... Am I married?').toLowerCase();
  console.log('User entered answerThree as: ' + answerThree);
  if (answerThree === 'n' || answerThree === 'no') {
    alert('Sadly, yes... you are correct.');
    correctCounter++;
  }
  else {
    alert('Thanks, but sorry... that\'s not right.');
  }
}

function questionFour() {
  var answerFour = prompt('Let\'s do an easier one... Do I have black hair?').toLowerCase();
  console.log('User entered answerFour as: ' + answerFour);
  if (answerFour === 'n' || answerFour === 'no') {
    alert('Awesome!! You are correct!');
    correctCounter++;
  }
  else {
    alert('Sorry, no.. my hair is brown');
  }
}

function questionFive() {
  var answerFive = prompt('Ok ' + username + ' , another question. Is my last name "Borda"?').toLowerCase();
  console.log('User entered answerFive as: ' + answerFive);
  if (answerFive === 'y' || answerFive === 'yes') {
    alert('Impressive!! You\'re right. Good job.');
    correctCounter++;
  }
  else {
    alert('No ' + username + ' my last name is "Borda".');
  }
}

function verifyNum(answerSix) {
  while (isNaN(answerSix)) {
    answerSix = parseInt(prompt('I said a number, please!!!'));
  }
  return answerSix;

}

function questionSix() {


  var answerSix = parseInt(prompt('Let\'s see if you can guess how old Scout Dog is. You have four gueses. GO!'));

  answerSix = verifyNum(answerSix);

  var wrongAnswerSix = true;

  console.log('User entered answerSix as: ' + answerSix);

  for (var i = 0; i < 4 && wrongAnswerSix; i++) {
    if (answerSix === 8 && wrongAnswerSix) {
      alert('Yeah! She is indeed 8... or so I\'m told, no one really knows for sure.');
      wrongAnswerSix = false;
      correctCounter++;
    }
    else if (wrongAnswerSix) {
      if (answerSix < 8 && i < 3) {
        answerSix = parseInt(prompt('No... you\'re too low. Try again.'));
        answerSix = verifyNum(answerSix);
        console.log('User re-entered answerSix as: ' + answerSix + ', when i = ' + i);
      }
      else if (answerSix > 8 && i < 3) {
        answerSix = parseInt(prompt('No... you\'re too high. Try again.'));
        answerSix = verifyNum(answerSix);
      }
      else {
        alert('Nope.. and you\'re out of tries. Sorry.');
      }
      answerSix = parseInt(answerSix, 10);
      console.log('answerSix was parsed into int: ' + answerSix + ', when i = ' + i);
    }
  }
}

function questionSeven() {
  var myStates = ['Texas', 'Alabama'];
  var answerSeven = prompt('Now I\'ll give you six tries to guess one of the states I\'ve lived in besides Washington. Go for it ' + username + '!').toLowerCase();
  var wrongAnswer = true;
  var questionSevenCounter = 0;
  console.log('User entered answerSeven as: ' + answerSeven + ', with questionSevenCounter at: ' + questionSevenCounter);

  while (questionSevenCounter < 6 && wrongAnswer) {
    questionSevenCounter++;
    for (var j = 0; j < myStates.length; j++) {
      if (answerSeven === myStates[j].toLowerCase()) {
        wrongAnswer = false;
        correctCounter++;
        alert('Yeah, you got it.  I did live in ' + myStates[j]);
      }
    }

    if (questionSevenCounter < 6 && wrongAnswer) {
      answerSeven = prompt('Sorry, ' + answerSeven + ' is not correct... Try again.').toLowerCase();
      console.log('User re-entered answerSeven as: ' + answerSeven + ', with questionSevenCounter at: ' + questionSevenCounter);
    }
    else if (questionSevenCounter === 6 && wrongAnswer) {
      alert('No, ' + answerSeven + ' is not correct. You\'re out of tries.');
    }
  }
}

// Ask them five yes/no y/n type questions
questionOne();

questionTwo();

questionThree ();

questionFour();

questionFive();

// Lab 3 part ---------------------------------

// Question 6: Guess Scout's age and say if answer too high/low
questionSix();

// Question 7: Guess states
questionSeven();


// Display correct score & feedback at end
console.log('correctCounter is at: ' + correctCounter);
alert(username + ', you got ' + correctCounter + ' of 7 answers correct.');
if (correctCounter <= 3) {
  alert('Better luck next time ' + username + '!!');
}
else if (correctCounter <= 4) {
  alert('Pretty good ' + username + '!!');
}
else if (correctCounter <= 6) {
  alert('You\'re on top of this ' + username + '!!');
}
else {
  alert('Perfect Score!!!!');
}