'use strict';
 let score=0 ;
 alert("welcome to my website")
 let userName = prompt("what's your name?")
 alert('hi ' + userName +", A warm welcome to the website!")
 let ageMe = prompt("do you think that iam 25 years old?")
 ageMe = ageMe.toLowerCase();
function qusetion1(){
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
}
qusetion1();

let musIc = prompt("do you think that i like music?")
 musIc = musIc.toLowerCase();
function qusetion2(){
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
}
qusetion2();
 let olDer = prompt("do you think that i love computer games?")
 olDer = olDer.toLowerCase();
 function qusetion3(){
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
}
qusetion3();
 let doTa= prompt("do you think that iam dota player?")
 doTa = doTa.toLowerCase();
 function qusetion4(){
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
}
qusetion4();
 let fooTball = prompt("do you think that i like football?")
 fooTball = fooTball.toLowerCase();
 function qusetion5(){
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
}
qusetion5();
alert('hi '+ userName + "  Thanks for visiting my website, we really appreciate your interest")

let counter =1;
let quessNumber = prompt("guess a number plz")
function qusetion6(){
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
}
qusetion6();

let correctColor = ['red', 'black','white' ];
let answer = prompt(' what Do you think my favorite color ?');
answer=answer.toLowerCase();
function qusetion7(){
for(let j=0;j<5;j++){
for (let i = 0; i<correctColor.length; i++) {
    console.log(answer,correctColor[i]);
  if ( answer === correctColor[i]){
      j=5;
      score++;
      console.log(j);
      break;
}  
}
if(j !== 5){
answer = prompt(' what Do you think my favorite color ?');
}
}
}
qusetion7();
alert( 'my favorite colors is  ' + correctColor);
alert('your score is ' + score);

