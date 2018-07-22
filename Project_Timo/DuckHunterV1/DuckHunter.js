var settingsClick = 0;
var musicClick = 0;
var audio = document.getElementById('Rust');
var onOff = document.getElementById('settingsTextSwitch');
var mmMenu = document.getElementById('mmMenu');
var duckTitle = document.getElementById('duckTitle');
var shopPage = document.getElementById('shopPage');
var levelsPage = document.getElementById('levelsPage');
var creditsPage = document.getElementById('creditsPage');


document.getElementById('backGroundSound').innerHTML = '<iframe class="testFrame" id="Schot" src="./Sounds/silent.mp3"></iframe>';  //if you dont use an iframe then its impossible to get your music starting automaticly in chrome, here i start a silent sound for 1 second and so on the video in html will succees auto starting. 
audio.volume = '0.9';



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
    mmMenu.style.display = 'none';
    duckTitle.style.display = 'none';
    shopPage.style.display = 'block';
}


function shopBackToMenu() {
    mmMenu.style.display = 'block';
    duckTitle.style.display = 'block';
    shopPage.style.display = 'none'; 
}


function toLevels() {
    mmMenu.style.display = 'none';
    duckTitle.style.display = 'none';
    levelsPage.style.display = 'block';
}


function levelsBackToMenu() {
    mmMenu.style.display = 'block';
    duckTitle.style.display = 'block';
    levelsPage.style.display = 'none';
}


function toCredits() {
    mmMenu.style.display = 'none';
    duckTitle.style.display = 'none';
    creditsPage.style.display = 'block';
}


function creditsBackToMenu() {
    mmMenu.style.display = 'block';
    duckTitle.style.display = 'block';
    creditsPage.style.display = 'none';
}





