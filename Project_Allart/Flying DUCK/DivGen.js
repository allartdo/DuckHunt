var left = -300;
var randomTop = 0;
var enable = 0;
var fouten = 0;
var bird1 = document.getElementById("bird");
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



function hit() {
    bird1.style.visibility = "hidden";
    fouten -=1;
}




function PlayGame(){
    document.getElementById("startButton").style.display = "none";
    bird1.style.visibility = "visible";
    var reset = setInterval(goRight);

    setInterval(function(){
        //randomTop = Math.round(Math.random()*document.body.clientHeight);
        randomTop = Math.round(Math.random()*document.body.clientHeight);
    }, 2000);


    setInterval(function(){
        if (randomTop > bird1.offsetTop) {
            bird1.style.top = bird1.offsetTop + +3;                 //3px if you want to zoom out and be able to use this (25% zoom)
            //console.log(bird1.style.top);
        } else {
            bird1.style.top = bird1.offsetTop + -3;                 //1 pixel with 100% zoom
        }
        if (bird1.offsetTop > document.body.clientHeight - 70) {
            bird1.style.top = bird1.offsetTop + -3;
        }
    }, 1);



    function goRight() {
        left += 2;                                  //Speed of moving to Right. (every milli second he moves left +=... pixels)
        //console.log(x[0])
        //bird1.style.top = x[0] + 'px';
        bird1.style.transform = "scale(1)";
        bird1.style.left = left + "px";
        if (left > document.body.clientWidth + 100) {
            fouten +=1;
            console.log(fouten);
            bird1.style.visibility = "visible";
            clearInterval(reset);
            speed = setInterval(goLeft);
        }
    }


    function goLeft() {
        left -= 2;
        bird1.style.transform = "scaleX(-1)";
        bird1.style.left = left + "px";
        if (left < document.body.clientLeft - 200) {
            fouten +=1;
            console.log(fouten);
            bird1.style.visibility = "visible";
            clearInterval(speed);
            reset = setInterval(goRight);
        }
    }
}



/*var randomX = Math.floor(Math.random()*document.body.clientHeight);
console.log(randomX)
bird1.style.top = randomX + 'px';*/