var timer;
var timeEl=document.querySelector(".time");
var timeCounter=76;
var timeOverMsg=document.querySelector("#timeOver-message");
var startButton=document.querySelector("#start-button");
var nextButton=document.querySelector("#next-button"); 
var questionEl=document.querySelector(".question-place")
var selectA=document.querySelector("#a");
var selectB=document.querySelector("#b")
var selectC=document.querySelector("#c")
var selectD=document.querySelector("#d")
var feedbackEL=document.querySelector("#feedback")
 var currentA="";
 var currentB="";
 var currentC="";
 var currentD="";

var numbQuestion=1;
var currentQuestion=0;
var choices=0;
var feedback="";


var chiceA=document.querySelector("#a");
var chiceB=document.querySelector("#b");
var chiceC=document.querySelector("#c");
var chiceD=document.querySelector("#d");



var questions=["Commonly used data types Do Not Include:","The condition in an if/else statement is enclosed with","Array in Javascript can be used to store",
"Strings values must be enclosed within ___when being assigned to varables","A very useful tool during developmentand debugging for printing content to the debugger is:"]
var answOptions=["A- strings","B- booleans","C- alerts","D- numbers",
"A- quotes","B- curly brackets","C- parenthesis","D- square brackets",
"A- numbers and strings","B- other arrays","C- booleans","D- All of the above",
"A- commas","B- curly brackets","C- quotes","D- parenthesis","A- Javascript","B- terminal/bash","C- for loops","D- console.log"

];
var correctAnswer=["C- alerts","C- parenthesis","D- All of the above","C- quotes","D- console.log"];
// var correctAns1 ="browsers programming lang"
// var answ2Options=["A- Australian Property Institute","B- Application Programming Interface","C- Android Applications","D- None of the above"];
// var answ3Optiona=["Computer manufacturing","Firewall","Javascript Object Notation","None"];

timeCounter.textContent=timer;

function startQuiz(){
    startTimer();
    makeVisible();
    displayQusetion();    
    displayAnswer();
    makeVisible();    
}

function startTimer(){
    timer=setInterval(function(){
      timeCounter--;
      timeEl.textContent=timeCounter;
      
      if(timeCounter<30){
        timeEl.setAttribute("style","color:red")
        }
     if(timeCounter=== 0){
            timeOverMesage();
            clearInterval(timer);
        }
    


    },1000)
}

function timeOverMesage(){
    timeOverMsg.textContent="Time is Over"
}

function displayQusetion(){
    questionEl.textContent=questions[currentQuestion];
}
function nextQuestion(){
    if( numbQuestion>=5){
        makeHidden();
      
    }

    //add one to question array index
    currentQuestion++;
    //add 4 to answers array index to move to next series of choices
    choices=choices+4;
    displayQusetion();
    displayAnswer();
    numbQuestion++;
}

function displayAnswer(){
    chiceA.textContent=answOptions[choices];
    currentA=answOptions[choices];
    chiceB.textContent=answOptions[choices+1];
    currentB=answOptions[choices+1];
    chiceC.textContent=answOptions[choices+2];
    currentC=answOptions[choices+2];
    chiceD.textContent=answOptions[choices+3];
    currentD=answOptions[choices+3];
}
function checkAnswerforA(){
    if(correctAnswer.includes(currentA)){
    feedback="correct";
    }
    else{
        feedback="Wrong";
        timeCounter-=20;
    }
    feedbackEL.textContent=feedback;
    nextQuestion();
}

function checkAnswerforB(){
    if(correctAnswer.includes(currentB)){
        feedback="correct";
      }
      else{
          feedback="Wrong";
          timeCounter-=20;
      }
      feedbackEL.textContent=feedback;
      nextQuestion();

}
function checkAnswerforC(){
    if(correctAnswer.includes(currentC)){
        feedback="correct";
      }
      else{
          feedback="Wrong";
          timeCounter-=20;
      }
      feedbackEL.textContent=feedback;
      nextQuestion();

}
function checkAnswerforD(){
    if(correctAnswer.includes(currentD)){
        feedback="correct";
      }
      else{
          feedback="Wrong";
          timeCounter-=20;
      }
      feedbackEL.textContent=feedback;
      nextQuestion();

}
function makeVisible(){
    document.querySelector("#a").setAttribute("style","visibility:visible")
    document.querySelector("#b").setAttribute("style","visibility:visible")
    document.querySelector("#c").setAttribute("style","visibility:visible")
    document.querySelector("#d").setAttribute("style","visibility:visible")    
}
function makeHidden(){
    document.querySelector("#a").setAttribute("style","visibility:hidden")
    document.querySelector("#b").setAttribute("style","visibility:hidden")
    document.querySelector("#c").setAttribute("style","visibility:hidden")
    document.querySelector("#d").setAttribute("style","visibility:hidden") 
   // document.querySelector("#feedback").setAttribute("style","visibility:hidden")
    
}


startButton.addEventListener("click",startQuiz);
nextButton.addEventListener("click",nextQuestion)
selectA.addEventListener("click",checkAnswerforA,nextQuestion);
selectB.addEventListener("click",checkAnswerforB,nextQuestion);
selectC.addEventListener("click",checkAnswerforC,nextQuestion);
selectD.addEventListener("click",checkAnswerforD,nextQuestion)

console.log(currentA);
