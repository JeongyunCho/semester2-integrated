
(function() {
	"use strict";

//write custom JS here

//Variables
var bubbles = document.getElementsByClassName("bubble");
var words = document.getElementsByClassName("serif");
var showBtn = document.querySelector("#arrow");
var characters = document.getElementsByClassName("characterImg");
var	x = 0;
	//functions

function showChar(){
	//console.log("fired from showChar()");
	var i;
	if (x === 0){
	 for (i = 0; i < characters.length; i++) 
	 {characters[i].style.display = "block";} 
		x++; 
		showBtn.src = "images/up_arrow.svg";}else {{
        for (i = 0; i < characters.length; i++) {
        characters[i].style.display = "none";}
		x--;
		showBtn.src = "images/down_arrow.svg";
	 }
}
}	
function showSerif(evt){
	evt.preventDefault();
	console.log(evt.target.id);
	var imgId = evt.target.id;
	for(var i=0; i<words.length; i++) {
		
	if (imgId === "b1"){
		//console.log(words[0]);
		words[0].style.display = "block";
		bubbles[0].style.display = "none";
	}
	if (imgId === "b2"){
		words[1].style.display = "block";
		bubbles[1].style.display = "none";
	}
	if (imgId === "b3"){
		words[2].style.display = "block";
		bubbles[2].style.display = "none";
	}
	if (imgId === "b4"){
		words[3].style.display = "block";
		bubbles[3].style.display = "none";
	}
	if (imgId === "b5"){
		words[4].style.display = "block";
		bubbles[4].style.display = "none";
	}
	if (imgId === "b6"){
		words[5].style.display = "block";
		bubbles[5].style.display = "none";
	}
	if (imgId === "b7"){
		words[6].style.display = "block";
		bubbles[6].style.display = "none";
	}
	}
}

	//Listeners
showBtn.addEventListener("click",showChar,false);
for(var i=0; i<bubbles.length; i++) {
		//console.log(i);
			bubbles[i].addEventListener("click", showSerif, false);
	}
	
})();
