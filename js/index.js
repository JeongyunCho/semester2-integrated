(function() {
	"use strict";
//javascript for video player	
	
var video, toggleButton, toggleButtonx;
var volume = document.querySelector("#vol-control");
var volumeOn = document.querySelector("#volumeOn");

function init() {
	//console.log("From Init()");
	video = document.querySelector("#myVideo");
	//console.log(video.currentSrc) //This determines which codac the video is being played in.
	toggleButtonx = document.querySelector("#restartVideo");
	toggleButton = document.querySelector("#playVideo");
	toggleButton.addEventListener("click", togglePlay, false);
	toggleButtonx.addEventListener("click", restart, false);
}




function togglePlay(evt) { //to get the video to fire and play
	console.log("from togglePlay()");
	
	//condition for pause and play
	if(video.paused)
	{
		console.log(evt.target);
		video.play();	
		evt.target.src = "images/pause.svg";
		
	}
	else
	{
		video.pause();
		evt.target.src = "images/play.svg";
	}
}
	  
function restart() {
        video.currentTime = 0;
    }
	
function mutePlayer (evt) {
                    if (video.muted) {
                        video.muted = false;
                        evt.target.src = "images/volumeon.svg";
                    } else {
                        video.muted = true;
                        evt.target.src = "images/mute.svg";
                    }
}
	
function volumeControl(){
  video.volume = volume.value / 100;
	
	//console.log(volume.value);
if(video.volume ===0){
	video.muted = true;
                        volumeOn.src = "images/mute.svg";}
		else {
                        video.muted = false;
                  volumeOn.src = "images/volumeon.svg";
                    }
	
}	
volume.addEventListener("input",volumeControl, false);//for volume bar
	
window.addEventListener ("load", init, false); //make sures the video loads before they can interact (Until the entire page loads they cant hit play)
 volumeOn.addEventListener("click", mutePlayer, false); 
	
	
//javascript for gollum sound	
	
//Variables	
var gollumSound = document.querySelector("#audioTag");
var audio = document.querySelector("audio");
	//functions
function audioPlay(){
	//console.log("Fired From audioplay()");
	
		audio.play();
}

	//Listeners
gollumSound.addEventListener("click",audioPlay, false);
})();
