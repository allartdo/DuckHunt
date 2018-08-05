//Background images
var Background = document.getElementById('Background');
var World1Background = document.getElementById('World1Background');

//Settings Clicks
var settingsVariables = [settingsClick = 0, musicClick = 0, fullscreenClick = 0];           //for shorter code and keeping it clear code. Array for variables with numbers.

//Audio
var audio = document.getElementById('Rust');

//onOff setting
var STonOff = document.getElementById('settingsMainMenuSoundSwitch');
var FSonOff = document.getElementById('settingsFullscreenSwitch');
var settingsMenu = document.getElementById('settingsMenu');
var elem = document.documentElement;

//Main Menu
var mmMenu = document.getElementById('mmMenu');

//Money
var MoneyDiv = document.getElementById('MoneyDiv');
var Money = document.getElementById('Money');
var duckCoin = document.getElementById('duckCoin');
//Duck Title
var duckTitle = document.getElementById('duckTitle');

//Play
var level1Div = document.getElementById('level1Div');

//levels
var levelsPage = document.getElementById('levelsPage');
var borderWorldButton = document.getElementsByClassName('borderOfWorldButtton');
var World1Menu = document.getElementById('World1Menu');

//shop
var shopPage = document.getElementById('shopPage');
var sGunMenu = document.getElementById('sGunMenu');
var sSkillMenu = document.getElementById('sSkillMenu');

//credits
var creditsPage = document.getElementById('creditsPage');


document.getElementById('backGroundSound').innerHTML = '<iframe class="testFrame" id="Schot" src="./Sounds/silent.mp3"></iframe>';  //if you dont use an iframe then its impossible to get your music starting automaticly in chrome, here i start a silent sound for 1 second and so on the video in html will succees auto starting. 
audio.volume = '0.9';


// All Settings
function settingsButton() {
    if (settingsClick == 0) {
        settingsMenu.style.display = 'block';
        settingsClick = 1;
    }

   else if (settingsClick == 1) {
        settingsMenu.style.display = 'none';
        settingsClick = 0;
    }
}


function switchMusic () {
    if (musicClick == 0) {
        audio.pause();
        STonOff.innerHTML = 'OFF';
        musicClick = 1;
    }

    else if (musicClick == 1) {
        audio.play();
        STonOff.innerHTML = 'ON';
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
        FSonOff.innerHTML = 'ON';
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
        FSonOff.innerHTML = 'OFF';
        fullscreenClick = 0;
    }
}

//Play

function toFirstLevel() {
    mmMenu.style.display = 'none';
    duckTitle.style.display = 'none';
    settingsMenu.style.display = 'none';
    Background.style.display = 'none';
    World1Background.style.display = 'block';
    level1Div.style.display = 'block';
    MoneyDiv.style.width = '125px';
    MoneyDiv.style.height = '30px';
    Money.style.fontSize = '20px';
    Money.style.top = '-12px';
    duckCoin.style.width = '27.5px';
    duckCoin.style.height = '27.5px';
    duckCoin.style.top = '1px';
}

//shop 

function toShop() {
    mmMenu.style.display = 'none';
    duckTitle.style.display = 'none';
    settingsMenu.style.display = 'none';
    shopPage.style.display = 'block';
    sGunButton.style.display = 'block';
    settingsClick = 0;
}


function shopBackToMenu() {
    mmMenu.style.display = 'block';
    duckTitle.style.display = 'block';
    shopPage.style.display = 'none'; 
    sGunButton.style.display = 'none';
    settingsMenu.style.display = 'none';
    settingsClick = 0;
}

//Shop Gun Menu
function toGunMenu() {
    mmMenu.style.display = 'none';
    duckTitle.style.display = 'none';
    shopPage.style.display = 'none';
    settingsMenu.style.display = 'none';
    sGunMenu.style.display = 'block';
    settingsClick = 0;
}

//Shop Skill Menu
function toSkillMenu() {
    mmMenu.style.display = 'none';
    duckTitle.style.display = 'none';
    shopPage.style.display = 'none';
    settingsMenu.style.display = 'none';
    sSkillMenu.style.display = 'block';
    settingsClick = 0;
}

function backToShopMenu() {
    sGunMenu.style.display = 'none';
    sSkillMenu.style.display = 'none';
    settingsMenu.style.display = 'none';
    shopPage.style.display = 'block'
    settingsClick = 0;
}

//levels

function toLevels() {
    mmMenu.style.display = 'none';
    duckTitle.style.display = 'none';
    settingsMenu.style.display = 'none';
    levelsPage.style.display = 'block';
    settingsClick = 0;
}

function levelsBackToMenu() {
    mmMenu.style.display = 'block';
    duckTitle.style.display = 'block';
    levelsPage.style.display = 'none';
    settingsMenu.style.display = 'none';
    settingsClick = 0;
}

//Levels || World Selector

//World 1 -- Level/World selector!!
function toWorld1() {
    levelsPage.style.display = 'none';
    world1Menu.style.display = 'block';
    settingsMenu.style.display = 'none';
    settingsClick = 0;
}

function backToLevelsMenu1() {
    levelsPage.style.display = 'block';
    world1Menu.style.display = 'none';
    settingsMenu.style.display = 'none';
    settingsClick = 0;
}

//World 2 -- Level/World selector!!
function toWorld2() {
    levelsPage.style.display = 'none';
    world2Menu.style.display = 'block';
    settingsMenu.style.display = 'none';
    settingsClick = 0;
}

function backToLevelsMenu2() {
    levelsPage.style.display = 'block';
    world2Menu.style.display = 'none';
    settingsMenu.style.display = 'none';
    settingsClick = 0;
}


//World 3 -- Level/World selector!!
function toWorld3() {
    levelsPage.style.display = 'none';
    world3Menu.style.display = 'block';
    settingsMenu.style.display = 'none';
    settingsClick = 0;
}

function backToLevelsMenu3() {
    levelsPage.style.display = 'block';
    world3Menu.style.display = 'none';
    settingsMenu.style.display = 'none';
    settingsClick = 0;
}


//World 4 -- Level/World selector!!
function toWorld4() {
    levelsPage.style.display = 'none';
    world4Menu.style.display = 'block';
    settingsMenu.style.display = 'none';
    settingsClick = 0;
}

function backToLevelsMenu4() {
    levelsPage.style.display = 'block';
    world4Menu.style.display = 'none';
    settingsMenu.style.display = 'none';
    settingsClick = 0;
}




//Credits

function toCredits() {
    mmMenu.style.display = 'none';
    duckTitle.style.display = 'none';
    settingsMenu.style.display = 'none';
    creditsPage.style.display = 'block';
    settingsClick = 0;
}


function creditsBackToMenu() {
    mmMenu.style.display = 'block';
    duckTitle.style.display = 'block';
    creditsPage.style.display = 'none';
    settingsMenu.style.display = 'none';
    settingsClick = 0;
}





