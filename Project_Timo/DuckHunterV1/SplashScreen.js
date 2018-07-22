var audio = document.getElementById('Rust').volume = '0.1';
var onOff = document.getElementById('settingsTextSwitch');

document.getElementById('backGroundSound').innerHTML = '<iframe class="testFrame" id="Schot" src="./silent.mp3"></iframe>';  //if you dont use an iframe then its impossible to get your music starting automaticly in chrome, here i start a silent sound for 1 second and so on the video in html will succees auto starting. 


window.setTimeout(function(){

    // Move to a new location or you can do something else
    window.location.href = "./SplashScreen.html";

}, 10100);
