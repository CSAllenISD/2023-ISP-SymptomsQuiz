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

var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");
var q7a3 = document.getElementById("q7a3");



//var showResultButton = document.getElementById("showResult");
var restartButton = document.getElementById("restart");
var result = document.getElementById("result");

//show result button
var showResultButton = document.getElementById("showResult");

showResultButton.addEventListener("click", showResult);

function updateResult() {
   // console.log('coldScore: ' + coldScore);
    //console.log('fluScore: ' + fluScore);
	if (coldScore >= 3){
        result.innerHTML = "You have a cold."
        console.log("You have a cold");
    } 
    else if (feverScore >= 3) {
        result.innerHTML = "You have the flu."
        console.log("You have the flu.");
  }
  else if (allergiesScore >= 3){
    result.innerHTML = "You have allergies."
    console.log("You have allergies.")
  }
}

function showResult() {

    reset();
    var q1Answer = $('input[name="q1"]:checked').val();
    var q2Answer = $('input[name="q2"]:checked').val();
    var q3Answer = $('input[name="q3"]:checked').val();
    var q4Answer = $('input[name="q4"]:checked').val();
    var q5Answer = $('input[name="q5"]:checked').val();
    var q6Answer = $('input[name="q6"]:checked').val();
    var q7Answer = $('input[name="q7"]:checked').val();


    console.log('q1Answer: ' + q1Answer)
    console.log('q2Answer: ' + q2Answer)

    calculateScore(q1Answer);
    calculateScore(q2Answer);
    calculateScore(q3Answer);
    calculateScore(q4Answer);
    calculateScore(q5Answer);
    calculateScore(q6Answer);
    calculateScore(q7Answer);


    updateResult();
}

function calculateScore(answer) {
    switch(answer){
        case 'flu':
            fluScore++;
            break;
        case 'cold':
            coldScore++;
            break;
        case "allergies":
            allergiesScore++;
            break;
    }
}

function reset() {
    result.innerHTML = "You have a..."
    numQuestion = 0
    coldScore = 0
    feverScore = 0;
    allergiesScore = 0;
}

