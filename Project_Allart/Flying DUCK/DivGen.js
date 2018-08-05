var move = -200;
var randomTop = 450;
var goingRight = 0;
var goingLeft = 0;
var enable = 0;
var lostHalfAHearth = 0;
var hitPoint = 0;
var bird1 = document.getElementById("bird");
var resetNumber;
var resetMoveTop;
var reset;
bird1.style.top = randomTop;
bird1.style.left = move;


//var stopGetRandomTopNumber;
//var stopMoveTillBorder;
//var stopGetRandomTopNumber = setInterval(getRandomTopNumber, 2000); 
//var stopMoveTillBorder = setInterval(moveTillBorder, 1);
//var x = getRandomTop();


/*setTimeout(function () {
    a.innerHTML = "&#xf242;";
  }, 2000);*/


//function getRandomTop() {
//    var randomX = Math.round(Math.random()*document.body.clientHeight);
//    return [randomX];
    //setInterval(function(){
    //    var randomX = Math.round(Math.random()*document.body.clientHeight);
    //    return [randomX];
    //}, 2000);
//}


function Pauze() {
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
}

function StopGame() {
    bird1.style.display = "none";
    document.getElementById("startAgainButton").style.display = "block";
    window.clearInterval(resetMoveTop);
    window.clearInterval(resetNumber);
    window.clearInterval(resetRight);
    window.clearInterval(resetLeft);
}

function Hit() {
    bird1.style.display = "none"
    hitPoint = 1;
    //var killId = setTimeout(function() {
    //    for (var i = killId; i > 0; i--) clearInterval(i)
    //  }, 100);
}


function getRandomTopNumber() {
    resetNumber = setInterval(function(){
        //randomTop = Math.round(Math.random()*document.body.clientHeight);
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
            bird1.style.top = bird1.offsetTop + -2;                 //1 pixel with 100% zoom
        }
        if (bird1.offsetTop > document.body.clientHeight - 70) {
            bird1.style.top = bird1.offsetTop + -2;
        }
    }, 1);
}


/*function moveLeftAndRight() {
    reset = setInterval(goRight);
    function goRight() {
        move += 2;                                  //Speed of moving to Right. (every milli second he moves left +=... pixels)
        //console.log(x[0])
        //bird1.style.top = x[0] + 'px';
        bird1.style.transform = "scale(1)";
        bird1.style.left = move + "px";
        if (move > document.body.clientWidth + 100) {
            if (hitPoint == 0) {
                lostHalfAHearth +=1;
                //alert("You lost half a heart!")
                console.log(lostHalfAHearth);
            }
            //bird1.style.display = "block"
            hitPoint = 0;
            clearInterval(reset);
            speed = setInterval(goLeft);
        }
    }


    function goLeft() {
        move -= 2;
        bird1.style.transform = "scaleX(-1)";
        bird1.style.left = move + "px";
        if (move < document.body.clientLeft - 200) {
            if (hitPoint == 0) {
                lostHalfAHearth +=1;
                //alert("You lost half a heart!")
                console.log(lostHalfAHearth);
            }
            //bird1.style.display = "block"
            hitPoint = 0;
            clearInterval(speed);
            reset = setInterval(goRight);
        }
    }
}*/




function goRight() {
    resetRight = setInterval(function(){
        goingLeft = 0;
        move += 2;
        bird1.style.transform = "scale(1)";
        bird1.style.left = move + "px";
        if (move > document.body.clientWidth + 100) {
            if (hitPoint == 0) {
                lostHalfAHearth +=1;
                console.log(lostHalfAHearth);
            }
            goingLeft = 1;
            bird1.style.display = "block"
            hitPoint = 0;
            window.clearInterval(resetRight);
            goLeft();
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
            if (hitPoint == 0) {
                lostHalfAHearth +=1;
                //alert("You lost half a heart!")
                console.log(lostHalfAHearth);
            }
            goingRight = 1;
            bird1.style.display = "block"
            hitPoint = 0;
            window.clearInterval(resetLeft);
            goRight();
        }
    }, 1);
}








function PlayGame(){
    document.getElementById("startButton").style.display = "none";
    bird1.style.display = "block";

    getRandomTopNumber();
    moveTillBorder();
    goRight();
}



/*var randomX = Math.floor(Math.random()*document.body.clientHeight);
console.log(randomX)
bird1.style.top = randomX + 'px';*/