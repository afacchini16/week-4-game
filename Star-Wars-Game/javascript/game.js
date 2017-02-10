$(document).ready(function(){
// initialize HP's for all characters
var darthVaderHP = 150;
var orsonKrennicHP = 180;
var bazeMalbusHP = 120;
var chirrutImweHP = 100;
// initialize all attack values
var darthAttack = 8;
var orsonAttack = 25;
var bazeAttack = 5;
var chirrutAttack = 15;
// creates empty array with the id names.  on click, "this" id will
//be deleted from the array
var nameIdArray = ["#darthVader", "#orsonKrennic", "#bazeMalbus", "#chirrutImwe"];
var remainingCardsId = [];
var gameSequenceTracker = 0;
var cardIdPicked = null;
var enemyCardId = null;

$("#darthVader span").text(darthVaderHP);
$("#orsonKrennic span").text(orsonKrennicHP);
$("#bazeMalbus span").text(bazeMalbusHP);
$("#chirrutImwe span").text(chirrutImweHP);

	$("button").on("click", function(){
		if (gameSequenceTracker === 0){
		
		$(this).detach().appendTo(".chosenChar");
		cardIdPicked = this.id;
		console.log(cardIdPicked);
		//console.log("tracker");
		gameSeque1dsnceTracker = 1;
		//console.log(gameSequenceTracker);

		// function enableTxt(elem) {
	 //    var id = $(elem).attr("id")
	//This function will organize and style the cards depending upon
	//which one the user initially clicks on
	else if (gameSequenceTracker === 1){
	$("button").on("click", "div", function(){
		enemyCardId = this.id;
		//console.log(cardIdPicked);
		//deletes the id name of the card the player picked from nameIdArray
		//this allows me to reference and style/compute on the remaining cards
		nameIdArray.splice($.inArray("#" + this.id, nameIdArray), 1);
		//Will iterate through the remaining card id's
		for (i = 0; i<nameIdArray.length;i++){
				var nameLoopArray = nameIdArray[i];
				//Adds the onClick class to the parent element (button)
				//which has red background
				$(nameLoopArray).parent().addClass("onClick");
				//Moves the remaining cards to the enemiesToAttack empty div
				//which moves the cards to the correct location
				$(nameLoopArray).parent().detach().appendTo(".enemiesToAttack");
		}
		//console.log(nameIdArray);
		gameSequenceTracker = 2
		})
	}
		else if (gameSequenceTracker === 2){
			$("button").on("click", function(){
				if(gameSequenceTracker === 2){
				$(this).detach().appendTo(".currentEnemy");
				$(this).parent().removeClass(".onClick");
				$(this).addClass("enemyCard");

				console.log(this);
				console.log(nameIdArray);
				console.log("class added")
			}
				gameSequenceTracker = 3;
			})
		}
		else if (gameSequenceTracker === 3){
			$("button").on("click",function(){
				console.log(this);
				gameSequenceTracker = 4;
				var className = ($(this).attr("class")).toString();
				console.log("Classname: " + className);
				console.log("cardIdPicked: "+ cardIdPicked);

				if(className == "attackBtn"){
					$(".attackText").text("Hits for: ");
					console.log("classname = attackbtn");
					gameSequenceTracker = 4;
				}
				else{
					alert("Wrong button");
					gameSequenceTracker = 4;
				}
				gameSequenceTracker = 4;
			})
		}
		else if (gameSequenceTracker ===4 ){
			console.log("gameSequenceTracker: " + gameSequenceTracker);
		}
})

//else{

//}

});


// else if (gameSequenceTracker == 1){



// };
