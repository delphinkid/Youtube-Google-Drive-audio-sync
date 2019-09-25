// ==UserScript==
// @name     Youtube Drive sync
// @description embed an audio track from soundcloud on a youtube page and sync it with video playback
// @version  1
// @grant    none
// @include  https://www.youtube.com/*
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==


function removeDriveEmbed(){
  driveAudio = document.getElementById("driveAudio");
  driveAudio.src = "";
  driveAudio.parentNode.removeChild(driveAudio);
  //embedDrive();
}

function embedDrive(){
	var element = document.getElementById("description");
  var idPattern = /(gdrivesync)\(([\d,\w,\-,\_]*)\)/i
  descriptionText = element.textContent;
  linkId = descriptionText.match(idPattern)[2];
  if (linkId != null){
    var para = document.createElement("audio");
    element.appendChild(para)
    para.setAttribute('controls', '');
    para.id = "driveAudio";
		para.src = "http://docs.google.com/uc?export=open&id=" + linkId
    var frameScript = document.createElement("script");
  	frameScript.innerHTML = "widget1 = document.getElementById('driveAudio');"
  	document.head.appendChild(frameScript);
  }
	window.addEventListener("yt-navigate-finish", removeDriveEmbed);
}

function injectJavaCode(){
  var insertScript = document.createElement("script");
  insertScript.innerHTML = "ytplayer = document.getElementById(\"movie_player\"); ytplayer.addEventListener('onStateChange', function(event) {  try {  	widget1.currentTime = ytplayer.getCurrentTime();	if (ytplayer.getPlayerState() == 1){widget1.play();} else{widget1.pause();} }  catch(error){};})"
  document.head.appendChild(insertScript);
}

waitForKeyElements ('#movie_player', injectJavaCode);
waitForKeyElements ('#description', embedDrive);