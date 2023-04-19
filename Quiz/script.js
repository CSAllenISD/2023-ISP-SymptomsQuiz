//Initial Scores

var coldScore = 0;
var fluScore = 0;
var allergiesScore = 0;
var numQuestion = 0;


var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2")

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");


//var showResultButton = document.getElementById("showResult");
var restartButton = document.getElementById("restart");
var result = document.getElementById("result");

//show result button

//showResultButton.addEventListener("click", showResult);

function updateResult() {
    console.log('coldScore: ' + coldScore);
    console.log('feverScore: ' + feverScore);
	if (coldScore >= 1){
        result.innerHTML = "You have a cold."
        console.log("You have a cold");
    } 
    else if (feverScore >= 1) {
        result.innerHTML = "You have a fever."
        console.log("You have a fever.");
  }
}

function showResult() {

    reset();
    var q1Answer = $('input[id="q1a1"]:checked').val();
    var q2Answer = $('input[id="q1a2"]:checked').val();

    console.log('q1Answer: ' + q1Answer)
    console.log('q2Answer: ' + q2Answer)

    calculateScore(q1Answer);
    calculateScore(q2Answer);

    updateResult();
}

function calculateScore(answer) {
    switch(answer){
        case 'Hot':
            feverScore++;
            break;
        case 'Cold':
            coldScore++;
            break;
    }
}

function reset() {
    result.innerHTML = "You have a..."
    numQuestion = 0
    coldScore = 0
    feverScore = 0;
}

