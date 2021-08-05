'use strict'
let nameOfUser = prompt("enter you name")
alert("welcome to my webite:  "+ nameOfUser)
function f1()
{
    let major = prompt("Do I like my major?")
    if(major !== null){
    major = major.toLowerCase();
    }
    switch(major){
    case 'yes':
        case'y':
        alert("your answer is wrong")
        break;

    case 'no':
        case'n':
        alert("your answer is right")
        console.log('your answer is right')
        break;    
    }
} f1();
function f2(){
let pasta = prompt("Do I like pasta?")
if(pasta !== null){
    pasta = pasta.toLowerCase();
}
switch(pasta){
    case 'yes':
        case 'y':
            alert("Your answer is right")
            console.log('your answer is right')
            break;
    
    case 'no':
        case 'n':
            alert("your answer is wrong")
            break;        
}
} f2();
function f3(){
    let reading = prompt("Do I read a lot?")
    if(reading !== null){
    reading = reading.toLowerCase();
}
switch(reading){
    case 'yes':
        case'y':
        alert("your answer is wrong")
        break;

    case 'no':
        case'n':
        alert("your answer is right")
        console.log('your answer is right')
        break;    
}
} f3();
function f4(){
let dancing = prompt("Do I like dancing?")
if(dancing !== null){
    dancing = dancing.toLowerCase();
}
switch(dancing){
    case 'yes':
        case 'y':
            alert("Your answer is right")
            console.log('your answer is right')
            break;
    
    case 'no':
        case 'n':
            alert("your answer is wrong")
            break;        
}
}f4();
function f5(){
let coding = prompt("Do I like coding?")
if(coding !== null){
    coding = coding.toLowerCase();
}
switch(coding){
    case 'yes':
        case'y':
        alert("your answer is wrong")
        break;

    case 'no':
        case'n':
        alert("your answer is right")
        console.log('your answer is right')
        break;    
}
<<<<<<< HEAD


let number = Number( prompt("What is my favorite number?"))
for(i=0; i<=3; i++){
    if (number>2) {
        alert("Too high")
        number = Number( prompt("What is my favorite number?"))
      } else if (number===2) {
      alert("correct answer")
      break;
      } else {
        alert("Too low")
        number = Number( prompt("What is my favorite number?"))
      }
      alert(`your score is ${score} out of 4`)
}
=======
}f5();
function f6(){
let number = Number( prompt("What is my favorite number?"))
for(let i=0; i<4; i++){
    if (number>8) {
        alert("Too high")
      } else if (number===8) {
      alert("correct answer")
      break;
      } else if(number<8) {
        alert("Too low")
    }
    number = Number( prompt("What is my favorite number?")) 
  
}
alert('the correct answer = 8');
}f6();

function f7(){
let score = 0;
let favFruit = ['berry', 'orange', 'peach','cherry'];
let q7;
let correct = false;
// i = 2 o
for (let i = 1; i <= 6; i++) {
    q7 = prompt('can you tell me any of my favFruits');
    for (let j = 0; j < favFruit.length; j++) {
        if (q7 === favFruit[j]) {
            alert('correct');
            // i = 7;
            correct = true;
            score++;
            break;
        }
    }
    if (correct) {
        break;
    }
}
alert("the correct answer is:  "+favFruit)
alert(`your score is ${score} out of 7`)
}f7();

>>>>>>> 109c7419a5004a5fbce88ff8b6b2036f29e5dc1b

