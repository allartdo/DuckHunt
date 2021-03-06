//DuckHunter - js|| made by Allart de Jong and Timo Brandt.
//ⒸCopyRight A.deJong & T.Brandt.
//Variable = doc.id is main for objects that we use more then twice!
//There is showed wich variables are used for what with the inline documentation.
//Every function has clear explanation of how it works.


//Background images
var backGround = document.getElementById('backGround');
var world1BackGround = document.getElementById('world1BackGround');

//Audio
var audio = document.getElementById('Rust');
document.getElementById('backGroundSound').innerHTML = '<iframe class="iFrameSound" src="./Sounds/silent.mp3"></iframe>';  //if you dont use an iframe then its impossible to get your music starting automaticly in chrome, here i start a silent sound for 1 second and so on the video in html will succees auto starting. 
audio.volume = '0.9';

//onOff setting
var settingsVariables = [settingsClick = 0, musicClick = 0, fullscreenClick = 0];           //for shorter code and keeping it clear code. Array for variables with numbers.
var STonOff = document.getElementById('settingsMainMenuSoundSwitch');
var FSonOff = document.getElementById('settingsFullscreenSwitch');
var settingsMenu = document.getElementById('settingsMenu');
var holeDoc = document.documentElement;

//Main Menu
var mmMenu = document.getElementById('mmMenu');

//Duck Title
var duckTitle = document.getElementById('duckTitle');

//Play
var birdVariables = [move = -200, randomTop = 450, goingRight = 0, goingLeft = 0, enable = 0, lostHalfAHearth = 0, dontLoseLifeOnHit = 0];
var resetNumber; 
var resetMoveTop;
var resetRight;
var resetLeft;
var reset;
var hitPoints = 0;
var hitsNeeded = 3;
var gamesWon = 0;
var bird1 = document.getElementById("bird");
var youWinDiv = document.getElementById('youWinDiv');
var Gun1 = document.getElementById('Gun1')
var levelDiv = document.getElementById('levelDiv');
var levelText = document.getElementById('levelText');
var moneyDiv = document.getElementById('moneyDiv');
var moneyCount = document.getElementById('Money');
var duckCoin = document.getElementById('duckCoin');
var ammoCount = document.getElementById('ammoCount');
var Money = 0;
var Ammo = 10;
bird1.style.top = randomTop;
bird1.style.left = move;

//Game over
var gameOverDiv = document.getElementById('gameOverDiv');

//levels
var levelsPage = document.getElementById('levelsPage');
var World1Menu = document.getElementById('World1Menu');

//shop
var shopPage = document.getElementById('shopPage');
var sGunMenu = document.getElementById('sGunMenu');
var sSkillMenu = document.getElementById('sSkillMenu');

//credits
var creditsPage = document.getElementById('creditsPage');



//settings
function hideSettingsMenu() {
    settingsMenu.style.display = 'none';      //then hide the settingsMenu (display none).
    settingsClick = 0;                        //settingsClick to 0 to reset the loop. (now the menu can be opened again and so i created a loop on click).
}

//Showing/hiding settings menu || onClick
function settingsButton() {             //Showed
    if (settingsClick == 0) {           //when settingsClick is equal to 0 (what he is standard, without any click on it yet.).
        settingsMenu.style.display = 'block';       //then show the settingsMenu (display block).
        settingsClick = 1;                          //settingsClick set to 1 so that when i click again it wont show dubble
    }

   else if (settingsClick == 1) {       //Hidden || when settingsClick is equal to 1 (what he is when you clicked it once)
    hideSettingsMenu();
    }
}

//Putting the main menu sound on/off
function switchMainMenuMusic () {       //Music OFF
    if (musicClick == 0) {
        audio.pause();
        STonOff.innerHTML = 'OFF';
        musicClick = 1;
    }

    else if (musicClick == 1) {         //Music ON
        audio.play();
        STonOff.innerHTML = 'ON';
        musicClick = 0;
    }
}

//Fullscreen On/Off
function switchFullscreen() {               //Fullscreen ON
    if (fullscreenClick == 0) {                 //when fullscreenClick is equal to 0 then activate everything under this.
        if (holeDoc.requestFullscreen) {           //When elem (document).requestFullscreen is active then 
            holeDoc.requestFullscreen();
          } else if (holeDoc.mozRequestFullScreen) { /* Firefox */
            holeDoc.mozRequestFullScreen();
          } else if (holeDoc.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            holeDoc.webkitRequestFullscreen();
          } else if (holeDoc.msRequestFullscreen) { /* IE/Edge */
            holeDoc.msRequestFullscreen();
          }
        FSonOff.innerHTML = 'ON';
        fullscreenClick = 1;
    }

    else if (fullscreenClick == 1) {         //Fullscreen OFF
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

/*function Pauze() {
    if (goingLeft == 1) {
        goLeft();
        bird1.style.display = "block";
        alert("contineu goLeft!")
    }
    if (goingRight == 1) {
        goRight();
        bird1.style.display = "block";
        alert("contineu goRight!")
    }
}

function startAgain() {
    bird1.style.display = "block";
    PlayGame();
}*/



function youWin() {
    gamesWon ++;
    bird1.style.visibility = "visible";
    bird1.style.display = "none";
    window.clearInterval(resetMoveTop);
    window.clearInterval(resetNumber);
    window.clearInterval(resetRight);
    window.clearInterval(resetLeft);
    levelDiv.style.display = "none";
    youWinDiv.style.display = "block";
    moneyDiv.style.width = '250px';
    moneyDiv.style.height = '60px';
    moneyCount.style.fontSize = '40px';
    moneyCount.style.top = '-25px';
    duckCoin.style.width = '55px';
    duckCoin.style.height = '55px';
    duckCoin.style.top = '3px';
    hitPoints = 0;
    hideSettingsMenu();
}

function gunShot() {
    levelDiv.onmousedown = function() {
        Ammo--;
        ammoCount.innerHTML = Ammo;
        if(Ammo == 0 && hitPoints < hitsNeeded) {
            Ammo ++;
            gameOver();
        }
    }
}

bird1.onmousedown = function hitBird1() {       
    bird1.style.visibility = "hidden";
    dontLoseLifeOnHit = 1;
    hitPoints ++;
    Money += 50;
    moneyCount.innerHTML = Money;
    Ammo--;
    ammoCount.innerHTML = Ammo;
    if(Ammo == 0 && hitPoints < hitsNeeded) {
        Ammo ++;
        gameOver();
    }
    if (hitPoints == hitsNeeded) {
        youWin();
    }
}

window.onmousemove = function(e) {          //the gun now follows the mouse 
    var x = e.pageX;
    Gun1.style.left = x - 50 + 'px';
}

function Bird1() {                              //FIRST MADE BIRD...        Allart de Jong :)
getRandomTopNumber();
moveTillBorder();
goRight();

    function getRandomTopNumber() {
        resetNumber = setInterval(function(){
            randomTop = Math.round(Math.random()*document.body.clientHeight);
        }, 2000);
    }

    function moveTillBorder() {
        resetMoveTop = setInterval(function(){
            if (randomTop > bird1.offsetTop) {
                bird1.style.top = bird1.offsetTop + +2;                 //3px if you want to zoom out and be able to use this function (25% zoom = max zoom out in chrome)
                //console.log(bird1.style.top);
                //console.log(randomTop);
            } else {
                bird1.style.top = bird1.offsetTop + -2;                 //1 pixel with 100% zoom or higher
            }
            if (bird1.offsetTop > document.body.clientHeight - 70) {
                bird1.style.top = bird1.offsetTop + -2;
            }
        }, 1);
    }

    function goRight() {
        resetRight = setInterval(function(){
            goingLeft = 0;
            move += 2;
            bird1.style.transform = "scale(1)";
            bird1.style.left = move + "px";
            if (move > document.body.clientWidth + 100) {
                if (dontLoseLifeOnHit == 0) {
                    lostHalfAHearth +=1;
                    console.log(lostHalfAHearth);
                }
                if (lostHalfAHearth == 10) {
                    gameOver();
                } else {
                goingLeft = 1;
                bird1.style.visibility = "visible";
                dontLoseLifeOnHit = 0;
                window.clearInterval(resetRight);
                goLeft();
                }
            }
        }, 1);
    }

    function goLeft() {
        resetLeft = setInterval(function(){
            goingRight = 0;
            move -= 2;
            bird1.style.transform = "scaleX(-1)";
            bird1.style.left = move + "px";
            if (move < document.body.clientLeft - 200) {
                if (dontLoseLifeOnHit == 0) {
                    lostHalfAHearth +=1;
                    //alert("You lost half a heart!")
                    console.log(lostHalfAHearth);
                }
                if (lostHalfAHearth == 10) {
                    gameOver();
                } else {
                goingRight = 1;
                bird1.style.visibility = "visible";
                dontLoseLifeOnHit = 0;
                window.clearInterval(resetLeft);
                goRight();
                }
            }
        }, 1);
    }
}

function playGame() {
    mmMenu.style.display = 'none';
    duckTitle.style.display = 'none';
    backGround.style.display = 'none';
    world1BackGround.style.display = 'block';
    levelDiv.style.display = 'block';
    bird1.style.display = "block";
    moneyDiv.style.width = '125px';
    moneyDiv.style.height = '30px';
    moneyCount.style.fontSize = '20px';
    moneyCount.style.top = '-12px';
    duckCoin.style.width = '27.5px';
    duckCoin.style.height = '27.5px';
    duckCoin.style.top = '1px';
    Ammo = 10;
    ammoCount.innerHTML = Ammo;
    move = -200, randomTop = 450, goingRight = 0, goingLeft = 0, enable = 0, lostHalfAHearth = 0, dontLoseLifeOnHit = 0;    //settings of the first bird.
    hideSettingsMenu();
    Bird1();
    setInterval(gunShot, 1000);
    setInterval(function(){                            //TEMPORARRY !! ITS NOW ACTIVATING EVERY 5 SECONDS (MAKING THE GAME MORE LAGGY IF U HAVE SHAIT PC).
        levelText.style.opacity = '0';                 //TYPE IN HERE WHAT U WANT TO SEE/REMOVE AFTER A SPECIAL AMOUT OF TIME.
    }, 5000);
}

function gameOver() {
    bird1.style.visibility = "visible";
    bird1.style.display = "none";
    window.clearInterval(resetMoveTop);
    window.clearInterval(resetNumber);
    window.clearInterval(resetRight);
    window.clearInterval(resetLeft);
    levelDiv.style.display = "none";
    gameOverDiv.style.display = "block";
    moneyDiv.style.width = '250px';
    moneyDiv.style.height = '60px';
    moneyCount.style.fontSize = '40px';
    moneyCount.style.top = '-25px';
    duckCoin.style.width = '55px';
    duckCoin.style.height = '55px';
    duckCoin.style.top = '3px';
    hitPoints = 0;
    hideSettingsMenu();
}

function retryLevel() {                             //GAME OVER
    gameOverDiv.style.display = "none";
    hideSettingsMenu();
    playGame();
}

function gameOverToMainMenu() {                     //GAME OVER
    gameOverDiv.style.display = "none";
    backGround.style.display = 'block';
    world1BackGround.style.display = 'none';
    hideSettingsMenu();
    toMainMenu();
}

function youWinToMainMenu() {                       //YOU WIN
    youWinDiv.style.display = "none";
    backGround.style.display = 'block';
    world1BackGround.style.display = 'none';
    hideSettingsMenu();
    toMainMenu();
}

function gameOverToLevels() {                       //GAME OVER
    gameOverDiv.style.display = "none";
    backGround.style.display = 'block';
    world1BackGround.style.display = 'none';
    levelsPage.style.display = 'block';
    hideSettingsMenu();
}

function youWinToLevels() {                         //YOU WIN
    youWinDiv.style.display = "none";
    backGround.style.display = 'block';
    world1BackGround.style.display = 'none';
    levelsPage.style.display = 'block';
    hideSettingsMenu();
}

function gameOverToShop() {                         //GAME OVER
    gameOverDiv.style.display = "none";
    backGround.style.display = 'block';
    world1BackGround.style.display = 'none';
    hideSettingsMenu();
    toShop();
}

function youWinToShop() {                           //YOU WIN
    youWinDiv.style.display = "none";
    backGround.style.display = 'block';
    world1BackGround.style.display = 'none';
    hideSettingsMenu();
    toShop();
}


//Main menu
function toMainMenu() {                                 //PURE MADE FOR SHORTER CODE
    mmMenu.style.display = 'block';
    duckTitle.style.display = 'block';
    hideSettingsMenu();
}

function outMainMenu() {                                //PURE MADE FOR SHORTER CODE
    mmMenu.style.display = 'none';
    duckTitle.style.display = 'none';
    hideSettingsMenu();
}


//Shop
function toShop() {                                     //PURE MADE FOR SHORTER CODE
    shopPage.style.display = 'block';
    sGunButton.style.display = 'block';
    hideSettingsMenu();
}

function mainMenuToShop() {
    outMainMenu()
    toShop();
}

function shopBackToMenu() {
    toMainMenu();
    shopPage.style.display = 'none'; 
    sGunButton.style.display = 'none';
}

//Shop Gun Menu
function toGunMenu() {
    shopPage.style.display = 'none';
    sGunMenu.style.display = 'block';
    hideSettingsMenu();
}

//Shop Skill Menu
function toSkillMenu() {
    shopPage.style.display = 'none';
    sSkillMenu.style.display = 'block';
    hideSettingsMenu();
}

function backToShopMenu() {
    sGunMenu.style.display = 'none';
    sSkillMenu.style.display = 'none';
    toShop();
}


//levels
function mainMenuToLevels() {
    outMainMenu();
    levelsPage.style.display = 'block';
}

function levelsBackToMenu() {
    toMainMenu();
    levelsPage.style.display = 'none';
}

//Levels || World Selector

//World 1 -- Level/World selector!!
function toWorld1() {
    levelsPage.style.display = 'none';
    world1Menu.style.display = 'block';
    hideSettingsMenu();
}

function backToLevelsMenu1() {
    levelsPage.style.display = 'block';
    world1Menu.style.display = 'none';
    hideSettingsMenu();
}

//World 2 -- Level/World selector!!
function toWorld2() {
    levelsPage.style.display = 'none';
    world2Menu.style.display = 'block';
    hideSettingsMenu();
}

function backToLevelsMenu2() {
    levelsPage.style.display = 'block';
    world2Menu.style.display = 'none';
    hideSettingsMenu();
}


//World 3 -- Level/World selector!!
function toWorld3() {
    levelsPage.style.display = 'none';
    world3Menu.style.display = 'block';
    hideSettingsMenu();
}

function backToLevelsMenu3() {
    levelsPage.style.display = 'block';
    world3Menu.style.display = 'none';
    hideSettingsMenu();
}


//World 4 -- Level/World selector!!
function toWorld4() {
    levelsPage.style.display = 'none';
    world4Menu.style.display = 'block';
    hideSettingsMenu();
}

function backToLevelsMenu4() {
    levelsPage.style.display = 'block';
    world4Menu.style.display = 'none';
    hideSettingsMenu();
}


//Credits
function toCredits() {
    outMainMenu();
    creditsPage.style.display = 'block';
}

function creditsBackToMenu() {
    toMainMenu();
    creditsPage.style.display = 'none';
}





