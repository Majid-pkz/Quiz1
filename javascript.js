var timer;
var timeEl=document.querySelector(".time");
var timeCounter=60;
var timeOverMsg=document.querySelector("#timeOver-message");
var startButton=document.querySelector(".start-button"); 
var questionEl=document.querySelector(".question-place")
var numbQuestion=0;
var currentQuestion=0;

var chiceA=document.querySelector("#a");
var chiceB=document.querySelector("#b");
var chiceC=document.querySelector("#c");
var chiceD=document.querySelector("#d");



var questions=["1-What is Javascript","2-What is API","3-What is JSON"]
var answ1Options=["A- browsers programming lang","B- databse","C- Anti-Virus","D- DocumentScript"];
var correctAns1 ="browsers programming lang"
var answ2Options=["Australian Property Institute","Application Programming Interface","Android Applications","None of the above"];
var answ3Optiona=["Computer manufacturing","Firewall","Javascript Object Notation","None"];

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
    questionEl.textContent=questions[currentQuestion]

}


function displayAnswer(choices){
    chiceA.textContent=answ1Options[0];
    chiceB.textContent=answ1Options[1];
    chiceC.textContent=answ1Options[2];
    chiceD.textContent=answ1Options[3];

}




startButton.addEventListener("click",startQuiz);


