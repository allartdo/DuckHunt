var shot = document.getElementById('Shot');
shot.pause();


window.setTimeout(function(){

    // Move to new location
    window.location.href = "./DuckHunter.html";

}, 14100);

window.setTimeout(function(){

    //Sound of shot
    shot.play();

}, 9500);