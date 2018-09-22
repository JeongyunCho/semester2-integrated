//do not under any circumstance remove this line
(function() {
	"use strict";

// JavaScript Document

	//Variables
	
	var sceneNames = ["The Gifting","Bilbo","Arwen Evenstar","Lapphund"]; 
		//console.log(sceneNames);
	var sceneExplains = ["Galadriel gives each member of the Fellowship a special gift that would become useful later in their quest", "The Ring was found by Bilbo Baggins, as told in The Hobbit, and Bilbo left it behind for Frodo.", "Elrond’s beautiful daughter, who plays only a minor role in The Fellowship of the Ring, but becomes more prominent later", "Galadriel sometimes appears as less a character than an embodiment of physical, mental, and spiritual perfection."];

	var sceneImages = ["movie-scence1","movie-scence2","movie-scence3","movie-scence4"]; 
	var displayImage = document.querySelector(".displayImage");
	var fullSize = document.querySelector("#fullSize");
	var span = document.querySelector(".close");
	var displayFullImage = document.querySelector(".fullSizedisplayImage");
	var fullText = document.querySelector(".fullSizeInfoText");
		//console.log(sceneImages);
	var sceneName = document.querySelector("#title");
	var sceneExplain = document.querySelector("#explanation");
	var sceneImage = document.querySelector("#mainImage");
	var thumbnailBox = document.querySelector("#subSection");
	var anchors = thumbnailBox.querySelectorAll("img");
	var leftBtn = document.querySelector("#leftArrow");
	var rightBtn = document.querySelector("#rightArrow");
	var e=0;
	//defined for slide Buttons
	var Filter = document.querySelector("#firstFilter");
	
	
	//functions
	function changeMainImage(evt) 
	{
		evt.preventDefault();
		//console.log("From changeMainImage()");
		//console.log(evt.target.id);
		sceneName.innerHTML = sceneNames[evt.target.id];
		sceneExplain.innerHTML = sceneExplains[evt.target.id];
		sceneImage.src = "images/"+sceneImages[evt.target.id]+".jpg";
		displayFullImage.src = "images/"+sceneImages[evt.target.id]+".jpg";
		fullText.innerHTML = sceneExplains[evt.target.id];
		e=(evt.target.id); 
		selected();
	}
	
	function slideLeft() {
		if(e>0){
		e--;
		//console.log(e);
		sceneName.innerHTML = sceneNames[e];
		sceneExplain.innerHTML = sceneExplains[e];
		displayFullImage.src = "images/"+sceneImages[e]+".jpg";
		fullText.innerHTML = sceneExplains[e];
		sceneImage.src = "images/"+sceneImages[e]+".jpg";
		} else{
			e=4;
			slideLeft();
		}
		selected();
	}
	
	function slideRight() {
		if(e<3){
		e++;
		//console.log(e);
		sceneName.innerHTML = sceneNames[e];
		sceneExplain.innerHTML = sceneExplains[e];
		displayFullImage.src = "images/"+sceneImages[e]+".jpg";
		fullText.innerHTML = sceneExplains[e];
		sceneImage.src = "images/"+sceneImages[e]+".jpg";
		} else{
			e=-1;
			slideRight();	
		}
		selected();
	}//I'm so glad I got this to work
	
	function selected(){	Filter.style.filter="brightness(100%)";
						
		if(e==="0" || e===0){						document.getElementById("0").style.filter="brightness(50%)";
		} else{
			document.getElementById("0").style.filter="brightness(100%)";
		}
		if(e==="1" || e===1){
			document.getElementById("1").style.filter="brightness(50%)";
		}else{
			document.getElementById("1").style.filter="brightness(100%)";
		}
		if(e==="2" || e===2){
			document.getElementById("2").style.filter="brightness(50%)";
		}else{
			document.getElementById("2").style.filter="brightness(100%)";
		}
		if(e==="3" || e===3)
		{
			document.getElementById("3").style.filter="brightness(50%)";
		}else{
			document.getElementById("3").style.filter="brightness(100%)";
		}
	}
function openFullSize() {
	
	fullSize.style.display = "block";
}

function closeFullSize() {
    fullSize.style.display = "none";
}


function windowClose(event) {
    if (event.target === fullSize) {
        fullSize.style.display = "none";
    }
}
	
	
	//Listeners
	
	for(var i=0; i<anchors.length; i++) {
		//console.log(i);
			anchors[i].addEventListener("click", changeMainImage, false);
	}
		leftBtn.addEventListener("click",slideLeft, false);
rightBtn.addEventListener("click",slideRight, false);
displayImage.addEventListener("click", openFullSize, false);
span.addEventListener("click", closeFullSize, false);
window.addEventListener("click", windowClose, false);
	




//this is for videoPlayer

var teaserVideo, trailerVideo, toggleButton, toggleButtonx, toggleButton2, toggleButtony;
var teaserVolume = document.querySelector("#teaserVolControl");
var trailerVolume = document.querySelector("#trailerVolControl");
var teaserVolumeOn = document.querySelector("#teaserVolumeOn");
var trailerVolumeOn = document.querySelector("#trailerVolumeOn");

function init() {
	//console.log("From Init()");
	teaserVideo = document.querySelector("#teaserVideo");
	trailerVideo = document.querySelector("#trailerVideo");
	//console.log(video.currentSrc) //This determines which codac the video is being played in.
	toggleButtonx = document.querySelector("#restartTeaser");
	toggleButton = document.querySelector("#playTeaser");
	toggleButton.addEventListener("click", togglePlay, false);
	toggleButtonx.addEventListener("click", restart, false);
	
	toggleButtony = document.querySelector("#restartTrailer");
	toggleButton2 = document.querySelector("#playTrailer");
	toggleButton2.addEventListener("click", togglePlayTrailer, false);
	toggleButtony.addEventListener("click", restartTrailer, false);
}




function togglePlay(evt) { //to get the video to fire and play
	console.log("from togglePlay()");
	
	//condition for pause and play
	if(teaserVideo.paused)
	{
		console.log(evt.target);
		teaserVideo.play();	
		evt.target.src = "images/pause.svg";
		
	}
	else
	{
		teaserVideo.pause();
		evt.target.src = "images/play.svg";
	}
}
	
	function togglePlayTrailer(evt) { //to get the video to fire and play
	console.log("from togglePlay()");
	
	//condition for pause and play
	if(trailerVideo.paused)
	{
		console.log(evt.target);
		trailerVideo.play();	
		evt.target.src = "images/pause.svg";
		
	}
	else
	{
		trailerVideo.pause();
		evt.target.src = "images/play.svg";
	}
}
	
	  
function restart() {
        teaserVideo.currentTime = 0;
    }
	
	function restartTrailer() {
        trailerVideo.currentTime = 0;
    }
	
function mutePlayer (evt) {
                    if (teaserVideo.muted) {
                        teaserVideo.muted = false;
                        evt.target.src = "images/volumeon.svg";
                    } else {
                        teaserVideo.muted = true;
                        evt.target.src = "images/mute.svg";
                    }
}
	function mutePlayerTrailer (evt) {
                    if (trailerVideo.muted) {
                        trailerVideo.muted = false;
                        evt.target.src = "images/volumeon.svg";
                    } else {
                        trailerVideo.muted = true;
                        evt.target.src = "images/mute.svg";
                    }
}
	
	
teaserVolume.addEventListener("input", function(){
  teaserVideo.volume = this.value / 100;

if(teaserVideo.volume ===0){
	teaserVideo.muted = true;
                 teaserVolumeOn.src = "images/mute.svg";}
		else {
                        teaserVideo.muted = false;
                  teaserVolumeOn.src = "images/volumeon.svg";
                    }

	
});//for volume bar
	
trailerVolume.addEventListener("input", function(){
  trailerVideo.volume = this.value / 100;
	if(trailerVideo.volume ===0){
	trailerVideo.muted = true;
                 trailerVolumeOn.src = "images/mute.svg";}
		else {
                        trailerVideo.muted = false;
                  trailerVolumeOn.src = "images/volumeon.svg";
                    }
});//for volume bar
	
window.addEventListener ("load", init, false); //make sures the video loads before they can interact (Until the entire page loads they cant hit play)
 teaserVolumeOn.addEventListener("click", mutePlayer, false); 
trailerVolumeOn.addEventListener("click", mutePlayerTrailer, false); 
	
	
})();