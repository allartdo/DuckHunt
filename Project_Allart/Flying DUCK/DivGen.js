var right = 0;
var left = -100;
var bird1 = document.getElementById("bird");
var x = getRandomTop();
var reset = setInterval(goRight);


/*setTimeout(function () {
    a.innerHTML = "&#xf242;";
  }, 2000);*/


function getRandomTop() {
    var randomX = Math.round(Math.random()*document.body.clientHeight);
    return [randomX];
    //setInterval(function(){
    //    var randomX = Math.round(Math.random()*document.body.clientHeight);
    //    return [randomX];
    //}, 2000);
}





function goRight() {
    left += 2;                                  //Speed of moving to Right. (every milli second he moves left +=... pixels)
    console.log(x[0])
    bird1.style.top = x[0] + 'px';
    bird1.style.left = left + "px";
    if (left > document.body.clientWidth - 100) {
        clearInterval(reset);
        speed = setInterval(goLeft);
    }
}


function goLeft() {
    left -= 2;
    bird1.style.left = left + "px";
    if (left < document.body.clientLeft) {
        clearInterval(speed);
        reset = setInterval(goRight);
    }
}


/*var randomX = Math.floor(Math.random()*document.body.clientHeight);
console.log(randomX)
bird1.style.top = randomX + 'px';*/