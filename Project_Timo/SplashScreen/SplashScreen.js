var settingsClick = 0;
var musicClick = 0;
var shopClick = 0;
var shopBack = 0;
var levelClick = 0;
var levelsBack = 0;
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
function toShop() {
    if (shopClick == 0) {
        document.getElementById('mmMenu').style.display = 'none';
        document.getElementById('duckTitle').style.display = 'none';
        document.getElementById('shopPage').style.display = 'block';
        document.getElementById('shopTitle').style.display = 'block';
        document.getElementById('shopBack').style.display = 'block';
    } 
    
}
function shopBackToMenu() {
    if (shopBack == 0) {
        document.getElementById('mmMenu').style.display = 'block';
        document.getElementById('duckTitle').style.display = 'block';
        document.getElementById('shopPage').style.display = 'none';
    }
}
function toLevels() {
    if(levelClick == 0) {
        document.getElementById('mmMenu').style.display = 'none';
        document.getElementById('duckTitle').style.display = 'none';
        document.getElementById('levelsPage').style.display = 'block';
        document.getElementById('levelsTitle').style.display = 'block';
        document.getElementById('levelsBack').style.display = 'block';
    }
}
function levelsBackToMenu() {
    if(levelsBack == 0) {
        document.getElementById('mmMenu').style.display = 'block';
        document.getElementById('duckTitle').style.display = 'block';
        document.getElementById('levelsPage').style.display = 'none';
    }
}