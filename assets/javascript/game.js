$(document).ready(function(){
//Initialize the variables which will be overwritten inside of functions
var currentScore = 0;
var numWins = 0;
var numLosses = 0;
var redValue = 0;
var blueValue = 0;
var yellowValue = 0;
var greenValue = 0;
var targetScore = 0;

//Generate the random Score and random crystal values
function randomNums(){
$(".lossText").text("");
$(".winText").text("");
targetScore = Math.floor(Math.random()*100)+19;
$(".targetScore span").text(targetScore);
//console.log("Random number is: " + targetScore);
redValue = Math.floor(Math.random()*12);
$("#redCrystal").attr("data-crystalNum", redValue);
//console.log($("#redCrystal").attr("data-crystalNum"));
//console.log("red: " + redValue);
blueValue = Math.floor(Math.random()*12);
$("#blueCrystal").attr("data-crystalNum", blueValue);
//console.log("blue: " + blueValue);
yellowValue = Math.floor(Math.random()*12);
$("#yellowCrystal").attr("data-crystalNum", yellowValue);
//console.log("yellow: " + yellowValue);
greenValue = Math.floor(Math.random()*12);
$("#greenCrystal").attr("data-crystalNum", greenValue);
//console.log("green: " + greenValue);
}

function resetValue(){
	$('.currentScore span').text(currentScore);
	$(".targetScore span").text(targetScore);
	$(".numWins span").text(numWins);
	$(".numLosses span").text(numLosses);
}

randomNums();
resetValue();

$(".allCrystals").on("click", function(){
	$(".winText").text(" ");
	$(".lossText").text("");
	var test = Number($(this).attr("data-crystalNum"));
	console.log(typeof test);
	//console.log(typeof Number($(this).attr("data-crystalNum")));
	console.log(currentScore);
	currentScore = currentScore + Number($(this).attr("data-crystalNum"));
	console.log(currentScore);
	$(".currentScore span").text(currentScore);

	if(currentScore === targetScore){
	numWins = numWins + 1;
	//$(".numWins span").text(numWins);
	console.log("You WIN! NumWins: " + numWins);
	targetScore = 0;
	currentScore = 0;
	resetValue();
	randomNums();
	$("winText").text("You Win!");
	}		
	else if (currentScore > targetScore){
		numLosses = numLosses + 1;
		console.log("numLosses: " + numLosses);
		$(".numLosses").text("Losses: " + numLosses);
		targetScore = 0;
		currentScore = 0;
		$(".lossText").text("You Lose!");
		resetValue();
		randomNums();
		$(".lossText").text("You Lose!");

	}
});

 });
