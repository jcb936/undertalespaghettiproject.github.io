var ciao = document.getElementById('ciao');
var imgAudio = document.getElementById("imgAudio");
$(document).ready(function() {
    ciao.play();
    $("#audioButton").click(function(event) {
        if (ciao.paused) {
            ciao.play();
            imgAudio.src="css/audio.png"; 
        } else {
            ciao.pause();
            imgAudio.src="css/audio2.png";
        }
    });
});