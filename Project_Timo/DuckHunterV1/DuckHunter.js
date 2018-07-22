//Seting Clicks
var settingsVariables = [settingsClick = 0, musicClick = 0, fullscreenClick = 0];

//Audio
var audio = document.getElementById('Rust');

//onOff setting
var onOff = document.getElementById('settingsTextSwitch');
var onOff2 = document.getElementById('settingsFullscreenSwitch');

var elem = document.documentElement;

//Main Menu
var mmMenu = document.getElementById('mmMenu');

//Duck Title
var duckTitle = document.getElementById('duckTitle');

//shop
var shopPage = document.getElementById('shopPage');
var sGunMenu = document.getElementById('sGunMenu');
var sSkillMenu = document.getElementById('sSkillMenu');

//levels
var levelsPage = document.getElementById('levelsPage');

//credits
var creditsPage = document.getElementById('creditsPage');


document.getElementById('backGroundSound').innerHTML = '<iframe class="testFrame" id="Schot" src="./Sounds/silent.mp3"></iframe>';  //if you dont use an iframe then its impossible to get your music starting automaticly in chrome, here i start a silent sound for 1 second and so on the video in html will succees auto starting. 
audio.volume = '0.9';


// All Settings
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


function switchFullscreen() {               //Fullscreen ON
    if (fullscreenClick == 0) {                 //when fullscreenClick is equal to 0 then activate everything under this.
        if (elem.requestFullscreen) {           //When elem (document).requestFullscreen is active then 
            elem.requestFullscreen();
          } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
          } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            elem.webkitRequestFullscreen();
          } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
          }
        onOff2.innerHTML = 'ON';
        fullscreenClick = 1;
    }

    else if (fullscreenClick == 1) {                 //Fullscreen OFF
        if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
          } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();
          }
        onOff2.innerHTML = 'OFF';
        fullscreenClick = 0;
    }
}



//shop 

function toShop() {
    mmMenu.style.display = 'none';
    duckTitle.style.display = 'none';
    shopPage.style.display = 'block';
    sGunButton.style.display = 'block';
}


function shopBackToMenu() {
    mmMenu.style.display = 'block';
    duckTitle.style.display = 'block';
    shopPage.style.display = 'none'; 
    sGunButton.style.display = 'none';
}

//Shop Gun Menu
function toGunMenu() {
    mmMenu.style.display = 'none';
    duckTitle.style.display = 'none';
    shopPage.style.display = 'none';
    sGunMenu.style.display = 'block';
}

//Shop Skill Menu
function toSkillMenu() {
    mmMenu.style.display = 'none';
    duckTitle.style.display = 'none';
    shopPage.style.display = 'none';
    sSkillMenu.style.display = 'block';
}

function backToShopMenu() {
    sGunMenu.style.display = 'none';
    sSkillMenu.style.display = 'none';
    shopPage.style.display = 'block'
}

//levels

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

//Credits

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





