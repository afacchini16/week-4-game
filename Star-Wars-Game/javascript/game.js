$(document).ready(function(){
// creates empty array with the id names.  on click, "this" id will
//be deleted from the array
var nameIdArray = ["#darthVader", "#orsonKrennic", "#bazeMalbus", "#chirrutImwe"];
var remainingCardsId = [];
var gameSequenceTracker = 0;
var cardIdPicked = null;
var enemyCardId = null;
var attackButtonState = true;
var enemyCounter = 1;
var enemyLossCounter = 1;

//Cards as objects that contain hp and attack info
var characters = {
 	darthVader: {
		attackDmg:8,
		hitPoints:150,
			},
	orsonKrennic: {
		attackDmg:25,
		hitPoints:180,
	},
	bazeMalbus: {
		attackDmg:5,
		hitPoints:120,
	},	
    chirrutImwe: {
		attackDmg:15,
		hitPoints:100,
	},

}

console.log(typeof(characters.darthVader));
$("#restartBtn").show();
$("#restartBtn").hide();

function scoreUpdate(){
$("#darthVader span").text(characters.darthVader.hitPoints);
$("#orsonKrennic span").text(characters.orsonKrennic.hitPoints);
$("#bazeMalbus span").text(characters.bazeMalbus.hitPoints);
$("#chirrutImwe span").text(characters.chirrutImwe.hitPoints);
}
scoreUpdate();

	$("button").on("click", function(){
		if (gameSequenceTracker === 0){
		cardIdPicked = $(this).attr("id");
		console.log("card chosen: " + cardIdPicked);
		console.log("attackDmg: " + characters[cardIdPicked].attackDmg);
		$(this).detach().appendTo(".chosenChar");
		nameIdArray.splice($.inArray("#" + this.id, nameIdArray), 1);
		//Will iterate through the remaining card id's
		for (i = 0; i<nameIdArray.length;i++){
				var nameLoopArray = nameIdArray[i];
				//Adds the onClick class to the parent element (button)
				//which has red background
				$(nameLoopArray).addClass("onClick");
				//Moves the remaining cards to the enemiesToAttack empty div
				//which moves the cards to the correct location
				$(nameLoopArray).detach().appendTo(".enemiesToAttack");
		}
		gameSequenceTracker = 1;

		}
	else if (gameSequenceTracker === 1){
		enemyCardId = this.id;
		console.log("Enemy: " + enemyCardId);
			// Moves enemy card 
			$(this).detach().appendTo(".currentEnemy" + enemyCounter);
			$(this).parent().removeClass(".onClick");
			$(this).addClass("enemyCard");
			enemyCounter = enemyCounter + 1;
			attackButtonState = true;

		gameSequenceTracker = 2;
		//enemyCardId = enemyPicker();
	}
		else if (gameSequenceTracker === 2 && attackButtonState == true){
				console.log(this);
				var className = ($(this).attr("class")).toString();

				if(className == "attackBtn"){
					attack();
					counterAttack();
					scoreUpdate();
					scoreCheck();
					// gameSequenceTracker = 2;
				}
				else{
					alert("Wrong button");
					gameSequenceTracker = 2;
				}
			// })
		}
		else if (gameSequenceTracker === 3){
			console.log("gameSequenceTracker: " + gameSequenceTracker);
		}
})

function enemyPicker(){
	// Player selects enemy card
		enemyCardId = this.id;
		console.log("Enemy: " + enemyCardId);
			// Moves enemy card 
			$(this).detach().appendTo(".currentEnemy");
			$(this).parent().removeClass(".onClick");
			$(this).addClass("enemyCard");

		gameSequenceTracker = 2;
}
function attack(){
	$(".attack").text("");
	$(".attack").text("You attacked for " + characters[cardIdPicked].attackDmg + " damage.");
	characters[enemyCardId].hitPoints -= characters[cardIdPicked].attackDmg;
	characters[cardIdPicked].attackDmg *= 2;
}

function counterAttack(){
	$(".counterAttack").text(" " + enemyCardId + "hit for " + characters[enemyCardId].attackDmg + " damage.");
	characters[cardIdPicked].hitPoints -= characters[enemyCardId].attackDmg;
	characters[enemyCardId].attackDmg *= 2;
}

function scoreCheck(){
	// Instructions if player defeats enemy
	if(characters[enemyCardId].hitPoints < 0){
		
		$(".attack").text("");
		$(".counterAttack").text("");
		$(".attack").text("You have defeated " + enemyCardId);
		$(".currentEnemy" + enemyLossCounter).hide();
		enemyLossCounter = enemyLossCounter + 1;
		gameSequenceTracker = 1;
		attackButtonState = false;
			if(enemyLossCounter === 4){
				$(".attack").text("You WON!!");

			}
					}
	// Instructions if player loses
	if (characters[cardIdPicked].hitPoints < 0){
		$(".attack").text("");
		$(".counterAttack").text("");
		$(".attack").text("You lose... GAME OVER!");
		$("#restartBtn").show();
	}
}

});


// else if (gameSequenceTracker == 1){



// };
