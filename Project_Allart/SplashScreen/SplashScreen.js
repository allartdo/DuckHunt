var settingsClick = 0;
var musicClick = 0;
var audio = document.getElementById('Rust');
var onOff = document.getElementById('settingsTextSwitch');

document.getElementById('backGroundSound').innerHTML = '<iframe class="testFrame" id="Schot" src="./silent.mp3"></iframe>';
audio.volume = '0.1';



function settingsButton() {
    if (settingsClick == 0) {
        document.getElementById('settingsMenu').style.display = 'block';
        settingsClick = 1;
    }

   else if (settingsClick == 1) {
        document.getElementById('settingsMenu').style.display = 'none';
        settingsClick = 0;
    }
}

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