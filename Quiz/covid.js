//Initial Scores

var coldScore = 0;
var fluScore = 0;
var allergiesScore = 0;
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
	if (coldScore >= 3){
        result.innerHTML = "You have a cold."
        console.log("You have a cold");
    } 
    else if (fluScore >= 3) {
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


    console.log('q1Answer: ' + q1Answer)
    console.log('q2Answer: ' + q2Answer)
    console.log('q3Answer: ' + q3Answer)
    console.log('q4Answer: ' + q4Answer)
    console.log('q5Answer: ' + q5Answer)

    calculateScore(q1Answer);
    calculateScore(q2Answer);
    
    if(q2Answer == 'flu')
        calculateScore('allergies');
    
    calculateScore(q3Answer);
    
    if(q3Answer == 'flu')
        calculateScore('cold');
    
    calculateScore(q4Answer);
    
    if(q4Answer == 'cold')
        calculateScore('flu');
    
    calculateScore(q5Answer);
    
    if(q5Answer == 'flu')
        calculateScore('cold');
    
    calculateScore(q6Answer);
    calculateScore(q7Answer);


    updateResult();
}

function calculateScore(answer) {
    switch(answer){
        case "flu":
            fluScore++;
            break;
        case "cold":
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
    coldScore = fluScore = allergiesScore = 0;
}