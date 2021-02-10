'use strict';

let userName = 'salti';

console.log(userName);

let correctAnswer=0;




let User = prompt('What\'s your name ');
alert('its our pleasure to have you with us MR/MRS ' + User);
alert(' Get Ready to play i want to know how much do you know me through this questions');
let question1 = prompt(' do you think I eat a lot ? ')

switch (question1.toLowerCase()) {

  case 'yes':
    alert('Wrong !');
    console.log('Wrong !');
    
    break;

  case 'y':
    alert('Wrong !');
    console.log('Wrong !');
    
    break;

  case 'no':
    alert(' Correct !');
    console.log('Correct !');
    correctAnswer +=1;
    break;

  case 'n':
    alert(' Correct !');
    console.log('Correct !');
    correctAnswer +=1;
    break;

  default:
    alert('you have to answer with (yes or y , no or n)');
    break;
}

let question2 = prompt('do you think i work ?');


switch (question2.toLowerCase()) {

  case 'yes':
    alert('Wrong!');
    console.log('Wrong !');
    
    break;

  case 'y':
    alert('Wrong !');
    console.log('Wrong !');
    
    break;

  case 'no':
    alert('Correct !');
    console.log('Correct ! ');
    correctAnswer +=1;
    break;

  case 'n':
    alert('Correct !');
    console.log('Correct ! ');
    correctAnswer +=1;
    break;

  default:
    alert('you have to answer with (yes or y , no or n)');
    break;
}


let question3 = prompt('do i love my life ?');

switch (question3.toLowerCase()) {

  case 'yes':
    alert(' Correct !  ');
    console.log('Correct !');
    correctAnswer +=1;
    break;

  case 'y':
    alert(' Correct !  ');
    console.log('Correct !');
    correctAnswer +=1;
    break;

  case 'no':
    alert('Wrong ! ');
    console.log('Wrong !');
    break;

  case 'n':
    alert('Wring ! ');
    console.log('Wrong !');
    break;

  default:
    alert('you have to answer with (yes or y , no or n)');
    break;
}

let question4 = prompt('am i such a nerd  ?! ');

switch (question4.toLowerCase()) {

  case 'yes':
    alert(' Correct ! ');
    console.log('Correct !');
    correctAnswer +=1;
    break;

  case 'y':
    alert(' Correct  ');
    console.log('Correct !');
    correctAnswer +=1;
    break;

  case 'no':
    alert('Wrong ! ');
    console.log('Wrong !');
    break;

  case 'n':
    alert('Wrong ! ');
    console.log('Wrong !');
    break;

  default:
    alert('you have to answer with (yes or y , no or n)');
    break;
}


let question5 = prompt('am  i muslim  ?');

switch (question5.toLowerCase()) {

  case 'yes':
    alert(' Correct !');
    console.log('Correct !');
    correctAnswer +=1;
    break;

  case 'y':
    alert('Correct !');
    console.log('Correct !');
    correctAnswer +=1;
    break;

  case 'no':
    alert('Wrong ! ');
    console.log('Wrong !');
    break;

  case 'n':
    alert('Wrong ! ');
    console.log('Wrong !');
    break;

  default:
    alert('you have to answer with (yes or y , no or n)');
    break;
}

alert('now another two questions That\'s not about me !');

let oneNumber = 13;
let attempt = 4;

let userInput= prompt('Guess the number you have 4 attempts you will start from now !')
while(attempt>=0){
for (let x = 0 ; x < 5 ; x++){

  if (userInput == oneNumber){

  alert('Thats Correct WoW !');
  correctAnswer +=1;
  attempt =false;
      break;

}
else if (userInput  <13){

  alert('too low from the answer');
  attempt -= 1;
  userInput = prompt('Try Again You Have :  ' + attempt + ' attempts remaining');
}else if ( userInput>26 ){
  alert('too high from the answer');
  attempt -= 1;
  userInput = prompt('Try Again You Have :  ' + attempt + ' attempts remaining');
  
  
}
}
if (!attempt) {
    
  alert('The correct answers is ' +oneNumber);
  
    break;
  }
  attempt -= 1;
  userInput = prompt('Try Again You Have :  ' + attempt + ' attempts remaining');
}








let arrnumber = [5, 10, 15, 20, 25, 30];

console.log(arrnumber);
console.log(arrnumber.length);

let attempts = 6 ;

let inputUser = prompt('Guess The Number game If You Can Lets Go');

while (attempts >= 0) {
  for (let i = 0; i < arrnumber.length; i++){ 
    
    if (inputUser == arrnumber[i]) {

      alert('Thats Correct !');
      correctAnswer +=1;
      
      attempts =false;
      break;
    }
   
  }
  

  if (!attempts) {
    
    alert('The correct answers is ' +arrnumber);
    
      break;
    }
    
    attempts -= 1;
  inputUser = prompt('Try Again You Have :  ' + attempts + ' attempts remaining');
  
}
alert('You got ' +correctAnswer+ ' correct answers out from 7 ');
alert(' Visit us Again MR/MRs ' + User);
