//var randomX = Math.round(Math.random()*document.body.clientHeight);
var randomTop = 0;
//var randomTop2 = 0;

//var min = -1;
//var max = 1;

var bird1 = document.getElementById("bird");
//console.log(bird1.style.top);

//function randomTopFunction() {
    setInterval(function(){
        //randomTop = Math.round(Math.random()*document.body.clientHeight);
        //randomTop2 = Math.round(Math.random()*-10)
        //bird1.style.top = bird1.offsetTop + randomTop2;
        //randomTop = Math.round(Math.random()* (max - min) + min)
        //bird1.style.top = bird1.offsetTop + randomTop;
        randomTop = Math.round(Math.random()*document.body.clientHeight);
        console.log(randomTop);
    }, 2000);



    setInterval(function(){
        if (randomTop > bird1.offsetTop) {
            bird1.style.top = bird1.offsetTop + +3;
            console.log(bird1.style.top);
        } else {
            bird1.style.top = bird1.offsetTop + -3;
        }
        if (bird1.offsetTop < 0) {
            bird1.style.top = bird1.offsetTop + +3;
        }
        if (bird1.offsetTop > 3870) {
            bird1.style.top = bird1.offsetTop + -3;
        }
    }, 1);

console.log(bird1.offsetTop);




//randomTop = Math.round(Math.random()*document.body.clientHeight);
//}
//randomTopFunction();


//ik laat een random nummer elke 2 sec genereren, als hij hoger is dan 450px dan gaat hij ++ tot hij daar is en als hij lager is -- tot hij er is.