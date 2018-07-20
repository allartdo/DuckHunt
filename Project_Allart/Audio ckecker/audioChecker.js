document.getElementById('backGroundSound').innerHTML = '<iframe class="testFrame" id="Schot" src="./silent.mp3"></iframe>';


var audio = document.getElementById('Rust');
var onOff = document.getElementById('settingsTextSwitch');
var musicClick = 0;
audio.volume = '0.1';
function switchMusic () {
    if (musicClick == 0) {
        audio.pause();
        onOff.innerHTML = 'OFF';
        musicClick = 1;
    }

    else if (musicClick == 1) {
        audio.play();
        onOff.innerHTML = 'ON';
        musicClick = 0;
    }
}

