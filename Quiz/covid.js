//Initial Scores

var yesScore = 0;
var noScore = 0;
var numQuestion = 0;


var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2")


//var showResultButton = document.getElementById("showResult");
var restartButton = document.getElementById("restart");
var result = document.getElementById("result");

//show result button
//var showResultButton = document.getElementById("showResult");

//showResultButton.addEventListener("click", showResult);

function updateResult() {
   // console.log('coldScore: ' + coldScore);
    //console.log('fluScore: ' + fluScore);
	if (yesScore >= 3){
        result.innerHTML = "You have COVID-19."
        console.log("You have COVID-19.");
    } 
    else if (noScore >= 3) {
        result.innerHTML = "You do not have COVID-19."
        console.log("You do not have COVID-19.");
  }
}

function showResult() {

    reset();
    var q1Answer = $('input[name="q1"]:checked').val();
    var q2Answer = $('input[name="q2"]:checked').val();
    var q3Answer = $('input[name="q3"]:checked').val();
    var q4Answer = $('input[name="q4"]:checked').val();
    var q5Answer = $('input[name="q5"]:checked').val();


    console.log('q1Answer: ' + q1Answer)
    console.log('q2Answer: ' + q2Answer)
    console.log('q3Answer: ' + q3Answer)
    console.log('q4Answer: ' + q4Answer)
    console.log('q5Answer: ' + q5Answer)

    calculateScore(q1Answer);
    calculateScore(q2Answer);
 calculateScore(q3Answer);
    calculateScore(q4Answer);
    calculateScore(q5Answer);
    
    

    updateResult();
}

function calculateScore(answer) {
    switch(answer){
        case "yes":
            yesScore++;
            break;
        case "no":
            noScore++;
            break;
    }
}

function reset() {
    result.innerHTML = "You have a..."
    numQuestion = 0
    yesScore = noScore =  0;
}
//tested, ready to move on