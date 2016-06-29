var points = 0;
var current;
function ScoreUp(){
    current = 10;
    points = points + current;
    document.getElementById("scoreCard").innerHTML = "Score: " + points;
    
}

function ScoreDown(){
    current = 5;
    points = points - current;
    document.getElementById("scoreCard").innerHTML = "Score: " + points;
}
function Navigate(pageName){
    window.location = pageName;
    
    
}
function Incorrect(){
   //grab the element we want to manipulate
   var wrongAnswer = document.getElementById("wrong1");
   wrongAnswer.style.color = "red";
   ScoreDown();
}    
function Incorrect2(){
   var wrongAnswer = document.getElementById("wrong2");
   wrongAnswer.style.color = "red";
   ScoreDown();
}  
function Incorrect3(){
   var wrongAnswer = document.getElementById("wrong3");
   wrongAnswer.style.color = "red";
   ScoreDown();
} 

function Correct(){
   //grab the element we want to manipulate
   var rightAnswer = document.getElementById("right1");
   rightAnswer.style.color = "green";
   ScoreUp();
   window.setTimeout(Navigate("ques5.html"), 1000)
}  
