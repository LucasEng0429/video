var video = document.querySelector(".video");
var speed = 1.0;
var percentage = 0;
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.load(); 
});
 
 document.querySelector('#play').addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
 });

 document.querySelector('#pause').addEventListener("click", function() {
	console.log("Pause Video");
    video.pause();
});
document.querySelector('#slower').addEventListener("click", function(){
	speed = speed - 0.1;
	video.playbackRate = speed;
	percentage = speed * 100;
	console.log("Speed: " + percentage + "%");
});



