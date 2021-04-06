'use strict';
 let score=0 ;
 alert("welcome to my website")
 let userName = prompt("what's your name?")
 alert('hi ' + userName +", A warm welcome to the website!")
 let ageMe = prompt("do you think that iam 25 years old?")
 ageMe = ageMe.toLowerCase();

 switch(ageMe){
     case 'yes':
     case 'y':
          console.log(ageMe);
        alert("that's correct");
        score++;
       
    break;

    case 'no':
    case 'n' :
        console.log(ageMe);
         alert("that's wrong ")
        break;
} 

let musIc = prompt("do you think that i like music?")
 musIc = musIc.toLowerCase();

 switch(musIc){
     case 'yes':
     case 'y':
         console.log(musIc);
          alert("that's correct");
          score++;
     break;

     case 'no':
     case 'n' :
         console.log(musIc);
         alert("that's wrong ")
         break;
 } 
 let olDer = prompt("do you think that i love computer games?")
 olDer = olDer.toLowerCase();
 switch(olDer){
     case 'yes':
     case 'y':
         console.log(olDer);
          alert("that's correct");
          score++;
     break;

     case 'no':
     case 'n' :
         console.log(olDer);
         alert("that's wrong ")
         break;
 } 
 let doTa= prompt("do you think that iam dota player?")
 doTa = doTa.toLowerCase();
 switch(doTa){
     case 'yes':
     case 'y':
         console.log(doTa);
          alert("that's correct");
          score++;
     break;

     case 'no':
     case 'n' :
         console.log(doTa);
         alert("that's wrong ")
         break;
 } 
 let fooTball = prompt("do you think that i like football?")
 fooTball = fooTball.toLowerCase();
 switch(fooTball){
     case 'yes':
     case 'y':
         console.log(fooTball);
          alert("that's correct");
          score++;
     break;

     case 'no':
     case 'n' :
         console.log(fooTball);
         alert("that's wrong ")
         break;
 } 
alert('hi '+ userName + "  Thanks for visiting my website, we really appreciate your interest")

let counter =1;
let quessNumber = prompt("guess a number plz")

while(parseInt(quessNumber) !== 10 && counter !== 5 ){
     
            counter++;
            if(quessNumber <10){
                alert("to low ");
           }else if(quessNumber>10){
              alert("to high");
           }
           if(counter === 5){
               alert("the answer is 10")
               break;
           }
           
           
           quessNumber=prompt("guess a number plz")
   
}
if(quessNumber == 10){
    score++;
    alert("you are right")
   }
let correctColor = ['red', 'black','white' ];
let answer = prompt(' what Do you think my favorite color ?');
answer=answer.toLowerCase();
for(let j=0;j<6;j++){
for (let i = 0; i<correctColor.length; i++) {
    console.log(answer,correctColor[i]);
  if ( answer === correctColor[i]){
      j=6;
      score++;
      console.log(j);
      break;
}  
}
if(j !== 6){
answer = prompt(' what Do you think my favorite color ?');
}
}
alert( 'my favorite colors is  ' + correctColor);
alert('your score is ' + score);

