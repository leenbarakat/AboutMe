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

