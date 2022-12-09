var timer;
var timeEl=document.querySelector(".time");
var timeCounter=60;
var timeOverMsg=document.querySelector("#timeOver-message");
var startButton=document.querySelector(".start-button");
var nextButton=document.querySelector(".next-button"); 
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

var numbQuestion=0;
var currentQuestion=0;
var choices=0;
var feedback="";


var chiceA=document.querySelector("#a");
var chiceB=document.querySelector("#b");
var chiceC=document.querySelector("#c");
var chiceD=document.querySelector("#d");



var questions=["1-What is Javascript","2-What is API","3-What is JSON","4-what was your favorite lecture"]
var answOptions=["A- browsers programming lang","B- databse","C- Anti-Virus","D- DocumentScript",
"A- Australian Property Institute","B- Application Programming Interface","C- Android Applications","D- None of the above",
"Computer manufacturing","Firewall","Javascript Object Notation","None",
"AQ4","BQ4","CQ4-Myfavorite","DQ4"
];
var correctAnswer=["A- browsers programming lang","B- Application Programming Interface","Javascript Object Notation","CQ4-Myfavorite"];
// var correctAns1 ="browsers programming lang"
// var answ2Options=["A- Australian Property Institute","B- Application Programming Interface","C- Android Applications","D- None of the above"];
// var answ3Optiona=["Computer manufacturing","Firewall","Javascript Object Notation","None"];

timeCounter.textContent=timer;

function startQuiz(){
    startTimer();
    displayQusetion();
    displayAnswer();
    
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
    //add one to question array index
    currentQuestion++;
    //add 4 to answers array index to move to next series of choices
    choices=choices+4;
    displayQusetion();
    displayAnswer();
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


startButton.addEventListener("click",startQuiz);
nextButton.addEventListener("click",nextQuestion)
selectA.addEventListener("click",checkAnswerforA,nextQuestion);
selectB.addEventListener("click",checkAnswerforB,nextQuestion);
selectC.addEventListener("click",checkAnswerforC,nextQuestion);
selectD.addEventListener("click",checkAnswerforD,nextQuestion)

console.log(currentA);
