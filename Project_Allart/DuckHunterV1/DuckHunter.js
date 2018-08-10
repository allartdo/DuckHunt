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
audio.volume = '0.1';

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
var bird1Variables = [move = -200, speedLeft = 2, speedRight = 2, speedTop = 2, randomTop = 450, goingRight = 0, goingLeft = 0, enable = 0, lostHalfAHearth = 0, dontLoseLifeOnHit = 0];
var resetNumber; 
var resetMoveTop;
var resetRight;
var resetLeft;
var reset;
var getRandomTopNumberDuration = 2000;
var levelsClick = 0;
var goToLevelTrue = 0;
var gamesWonTrue = 0;
var hitPoints = 0;
var hitsNeeded = 3;
var goToLevel = 0;
var gamesWon = 0;
var bird1 = document.getElementById("bird");
var testing = document.getElementById('test1');
var readySetGoTextChange = document.getElementById('readySetGoTextChange');
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

testing.onclick = function() {
    goToLevel = 2;
    levelsClick = 1;
    playGame();
}


function youWin() {
    if ((gamesWon == goToLevel) && (levelsClick == 1)) {
        gamesWon ++;
        alert("levels");
    } else if ((gamesWon >= goToLevel) && (gamesWonTrue == 1)) {
        gamesWon ++;
        alert("WonTrue");
    } else {
        alert("no point");
    }

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
    hideSettingsMenu();
}

function gunShot() {
    levelDiv.onmousedown = function() {
        Ammo--;
        ammoCount.innerHTML = Ammo;
        if(Ammo == 0 && hitPoints < hitsNeeded) {
            Ammo ++;
            console.log(Ammo);
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
            console.log(randomTop);
        }, getRandomTopNumberDuration);
    }

    function moveTillBorder() {
        resetMoveTop = setInterval(function(){
            if (randomTop >= bird1.offsetTop) {
                bird1.style.top = bird1.offsetTop += speedTop;                 //3px if you want to zoom out and be able to use this function (25% zoom = max zoom out in chrome)
                //console.log(bird1.style.top);
                //console.log(randomTop);
            } else {
                bird1.style.top = bird1.offsetTop -= speedTop;                 //1 pixel with 100% zoom or higher
            }
            if (bird1.offsetTop > document.body.clientHeight - 70) {
                bird1.style.top = bird1.offsetTop -= speedTop;
            }
        }, 1);
    }

    function goRight() {
        resetRight = setInterval(function(){
            goingLeft = 0;
            move += speedRight;
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
            move -= speedLeft;
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
    mmMenu.style.display = 'none';                          //BASIC CODE DOWN HERE
    duckTitle.style.display = 'none';
    backGround.style.display = 'none';
    world1BackGround.style.display = 'block';
    levelDiv.style.display = 'block';
    readySetGoTextChange.innerHTML = "3";
    readySetGoTextChange.style.display = "block";
    readySetGoTextChange.style.left = "900px"
    levelText.style.opacity = '1';
    moneyDiv.style.width = '125px';
    moneyDiv.style.height = '30px';
    moneyCount.style.fontSize = '20px';
    moneyCount.style.top = '-12.3px';
    duckCoin.style.width = '27.5px';
    duckCoin.style.height = '27.5px';
    duckCoin.style.top = '1px';
    levelDiv.onmousedown = 0;
    hitPoints = 0;
    Ammo = 10;
    ammoCount.innerHTML = Ammo;
    move = -200, randomTop = 450, goingRight = 0, goingLeft = 0, enable = 0, lostHalfAHearth = 0, dontLoseLifeOnHit = 0;    //settings of the first bird.
    hideSettingsMenu();
    hitsNeeded = 1;             //testing
    goToLevelTrue = 0;
    gamesWonTrue = 0;
    console.log("won " + gamesWon);
    console.log("level " + goToLevel);
    console.log("levelclick " + levelsClick);

    if ((gamesWon >= goToLevel) && (levelsClick == 1)) {
        levelText.innerHTML = "Level " + goToLevel;
        goToLevelTrue = 1;
    } else if (gamesWon >= goToLevel) {
        levelText.innerHTML = "Level " + gamesWon;
        gamesWonTrue = 1;
    } 
    console.log("Wontrue" + gamesWonTrue);
    console.log("levelTrue" + goToLevelTrue);

    var resetReady1 = setInterval(function(){               //In this interval function you can write what you want to see after 1 second || Runs only once
        readySetGoTextChange.innerHTML = "2";
        window.clearInterval(resetReady1);
    }, 1000);

    var resetReady2 = setInterval(function(){               //In this interval function you can write what you want to see after 2 second || Runs only once
        readySetGoTextChange.innerHTML = "1";
        window.clearInterval(resetReady2);
    }, 2000);

    var resetGo = setInterval(function(){                   //In this interval function you can write what you want to see after 3 second || Runs only once
        readySetGoTextChange.innerHTML = "GO";
        readySetGoTextChange.style.left = "740px"
        window.clearInterval(resetGo);
    }, 3000);

    var resetVisibility = setInterval(function(){           //In this interval function you can write what you want to see after 4 second || Runs only once
        levelText.style.opacity = '0';
        readySetGoTextChange.style.display = "none";
        bird1.style.display = "block";

        if ((goToLevel == 2 && goToLevelTrue == 1) || (gamesWon == 2 && gamesWonTrue == 1)) {              //Level 2
            alert("lvl 2")
            speedLeft = 2.1;
            speedRight = 2.1;
            speedTop = 2.1;
            getRandomTopNumberDuration = 1950;
        }

        if ((goToLevel == 3 && goToLevelTrue == 1) || (gamesWon == 3 && gamesWonTrue == 1)) {              //Level 3
            alert("lvl 3")
            speedLeft = 2.1;
            speedRight = 2.1;
            speedTop = 2.1;
            getRandomTopNumberDuration = 1950;
        }

        if ((goToLevel == 4 && goToLevelTrue == 1) || (gamesWon == 4 && gamesWonTrue == 1)) {              //Level 4
            alert("lvl 4")
            speedLeft = 2.2;
            speedRight = 2.2;
            speedTop = 2.2;
            getRandomTopNumberDuration = 1900;
        }

        if ((goToLevel == 5 && goToLevelTrue == 1) || (gamesWon == 5 && gamesWonTrue == 1)) {              //Level 5
            alert("Your doing very well! keep on going!!")
            hitsNeeded = 4;
        }

        if ((goToLevel == 6 && goToLevelTrue == 1) || (gamesWon == 6 && gamesWonTrue == 1)) {              //Level 6
            speedLeft = 2.3;
            speedRight = 2.3;
            speedTop = 2.3;
            getRandomTopNumberDuration = 1850;
        }

        if ((goToLevel == 7 && goToLevelTrue == 1) || (gamesWon == 7 && gamesWonTrue == 1)) {              //Level 7
            alert("lvl 7")
            speedLeft = 2.1;
            speedRight = 2.1;
            speedTop = 2.1;
            getRandomTopNumberDuration = 1950;
        }

        if ((goToLevel == 8 && goToLevelTrue == 1) || (gamesWon == 8 && gamesWonTrue == 1)) {              //Level 8
            alert("Congrats! ur first skill point has been added, go to shop, skills and choose what you want to upgrade");
            speedLeft = 2.4;
            speedRight = 2.4;
            speedTop = 2.4;
            getRandomTopNumberDuration = 1800;
            //first skill point added? Every 8 rounds you can get a skill point. at lvl 120 you will then have 15 upgrade points.
        }

        if ((goToLevel == 9 && goToLevelTrue == 1) || (gamesWon == 9 && gamesWonTrue == 1)) {              //Level 9
            alert("lvl 9")
            speedLeft = 2.1;
            speedRight = 2.1;
            speedTop = 2.1;
            getRandomTopNumberDuration = 1950;
        }

        if ((goToLevel == 10 && goToLevelTrue == 1) || (gamesWon == 10 && gamesWonTrue == 1)) {            //Level 10
            //console.log("One bird at a time not enough?")
            speedLeft = 2.5;
            speedRight = 2.5;
            speedTop = 2.5;
            getRandomTopNumberDuration = 1750;
            //Bird2
        }

        if ((gamesWon == 11) || (goToLevel == 11)) {              //Level 11
            alert("lvl 11")
            speedLeft = 2.1;
            speedRight = 2.1;
            speedTop = 2.1;
            getRandomTopNumberDuration = 1950;
        }

        if (gamesWon == 12) {                                //Level 12
            speedLeft = 2.6;
            speedRight = 2.6;
            speedTop = 2.6;
            getRandomTopNumberDuration = 1700;
        }

        if (gamesWon == 14) {                                //Level 14
            speedLeft = 2.7;
            speedRight = 2.7;
            speedTop = 2.7;
            getRandomTopNumberDuration = 1650;
        }

        if (gamesWon == 15) {                                //Level 15
            alert("nicu");
            hitsNeeded = 5;
        }
        
        if (gamesWon == 16) {                                //Level 16
            alert("Congrats! ur first skill point has been added, go to shop, skills and choose what you want to upgrade");
            speedLeft = 2.8;
            speedRight = 2.8;
            speedTop = 2.8;
            getRandomTopNumberDuration = 1600;
            //skill point added
        }

        if (gamesWon == 18) {                                //Level 18
            speedLeft = 2.9;
            speedRight = 2.9;
            speedTop = 2.9;
            getRandomTopNumberDuration = 1550;
        }

        if (gamesWon == 20) {                                //Level 20
            speedLeft = 3;
            speedRight = 3;
            speedTop = 3;
            getRandomTopNumberDuration = 1500;
            //life to 3 hearts now? instead of 5.
        }

        if (gamesWon == 22) {                                //Level 22
            speedLeft = 3.1;
            speedRight = 3.1;
            speedTop = 3.1;
            getRandomTopNumberDuration = 1450;
        }

        if (gamesWon == 24) {                                //Level 24
            alert("Congrats! ur first skill point has been added, go to shop, skills and choose what you want to upgrade");
            speedLeft = 3.2;
            speedRight = 3.2;
            speedTop = 3.2;
            getRandomTopNumberDuration = 1400;
            //skillpoint added
        }

        if (gamesWon == 25) {                                //Level 25
            hitsNeeded = 6;
        }

        if (gamesWon == 26) {                                //Level 26
            speedLeft = 3.3;
            speedRight = 3.3;
            speedTop = 3.3;
            getRandomTopNumberDuration = 1350;
        }

        if (gamesWon == 28) {                                //Level 28
            speedLeft = 3.4;
            speedRight = 3.4;
            speedTop = 3.4;
            getRandomTopNumberDuration = 1300;
        }

        if (gamesWon == 30) {                                //Level 30
            speedLeft = 3.5;
            speedRight = 3.5;
            speedTop = 3.5;
            getRandomTopNumberDuration = 1250;
            //bird added?
        }

        if (gamesWon == 32) {                                //Level 32
            speedLeft = 3.6;
            speedRight = 3.6;
            speedTop = 3.6;
            getRandomTopNumberDuration = 1200;
            //skill point added
        }

        Bird1();
        gunShot();
        window.clearInterval(resetVisibility);
    }, 4000);
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
    hideSettingsMenu();
}

function retryLevel() {                             //GAME OVER
    gameOverDiv.style.display = "none";
    playGame();
}

function youWinToNextLevel() {                      //YOU WIN
    gameOverDiv.style.display = "none";
    levelsClick = 0;
    playGame();
}

function gameOverToMainMenu() {                     //GAME OVER
    gameOverDiv.style.display = "none";
    backGround.style.display = 'block';
    world1BackGround.style.display = 'none';
    toMainMenu();
}

function youWinToMainMenu() {                       //YOU WIN
    youWinDiv.style.display = "none";
    backGround.style.display = 'block';
    world1BackGround.style.display = 'none';
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
    toShop();
}

function youWinToShop() {                           //YOU WIN
    youWinDiv.style.display = "none";
    backGround.style.display = 'block';
    world1BackGround.style.display = 'none';
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


