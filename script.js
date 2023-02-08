//Initial Scores

var coldScore = 0;
var feverScore = 0;
var numQuestion = 0;


var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");



var showResultButton = document.getElementById("showResult");
var restartButton = document.getElementById("restart");
var result = document.getElementById("result");

//show result button

showResultButton.addEventListener("click", showResult);

function updateResult() {
	if (coldScore >= 1){
			result.innerHTML = "You have a cold."
			console.log("You have a cold");
		} else if (feverScore >= 1) {
			result.innerHTML = "You have a fever."
			console.log("You have a fever.");
  }


function showResult() {

    reset()
    var q1Answer = $('input[name="q1"]:checked').val();
    var q2Answer = $('input[name="q2"]:checked').val();

    calculateScore(q1Answer);
    calculateScore(q2Answer);

    updateResult();
}

function calculateScore(answer) {
    switch(answer){
        case 'fever':
            feverScore++;
            break;
        case 'cold':
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


