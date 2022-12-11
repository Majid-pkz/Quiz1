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
var totalNumofQuestions=5;
var numbQuestion=0;
var currentQuestion=0;
var choices=0;
var feedback="";
var maxx=0;

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
    else if(timeCounter<= 0){
            timeOverMesage();
            clearInterval(timer);
            timeEl.textContent="0";
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
    if( currentQuestion>=(totalNumofQuestions-1)){
        makeHidden();
      // need to stop timer
      clearInterval(timer);

      //show the form
      document.getElementById("form").classList.remove("hidden");
      document.getElementById("score").textContent= timeCounter;
    }
    else{

    //add one to question array index
    currentQuestion++;
    //add 4 to answers array index to move to next series of choices
    choices=choices+4;
    displayQusetion();
    displayAnswer();
    numbQuestion++;
    }
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
        if(timeCounter>=20){
            timeCounter-=20;
        }
        else{
           numbQuestion=totalNumofQuestions;
        }
        
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
        if(timeCounter>=20){
            timeCounter-=20;
        }
        else{
            numbQuestion=totalNumofQuestions;
        }
        
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
        if(timeCounter>=20){
            timeCounter-=20;
        }
        else{
            numbQuestion=totalNumofQuestions;
        }
        
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
        if(timeCounter>=20){
            timeCounter-=20;
        }
        else{
            numbQuestion=totalNumofQuestions;
        }
        
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
    document.querySelector(".question-place").setAttribute("style","display:none")
   
    //document.querySelector("#feedback").setAttribute("style","visibility:hidden")'
    // unlike the others we want this messeage to pop up at the end
    document.getElementById("endOfQuiz").setAttribute("style","display:block")
    clearInterval(timer);
    
}

function saveToLocalStorage(){
 if(localStorage.getItem("highscore")){
    var scoreArray=JSON.parse(localStorage.getItem("highscore"))
    scoreArray.push({score:timeCounter, initials:document.getElementById("initial").value})
    localStorage.setItem("highscore", JSON.stringify(scoreArray))
    //
 }
 else{
    var scoreArray=[{score:timeCounter, initials:document.getElementById("initial").value}];
    localStorage.setItem("highscore", JSON.stringify(scoreArray))
 }
}




startButton.addEventListener("click",startQuiz);
nextButton.addEventListener("click",nextQuestion)
selectA.addEventListener("click",checkAnswerforA,nextQuestion);
selectB.addEventListener("click",checkAnswerforB,nextQuestion);
selectC.addEventListener("click",checkAnswerforC,nextQuestion);
selectD.addEventListener("click",checkAnswerforD,nextQuestion);
document.getElementById("submit").addEventListener("click",saveToLocalStorage);

