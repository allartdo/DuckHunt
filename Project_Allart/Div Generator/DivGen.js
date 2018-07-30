window.onload = function divGen() {
    var htmlElements = "";
    var container = document.getElementById("Container");

    
    for (var b = 0; b < 7; b++) {
        htmlElements += '<div class="box" id="box"></div>';
    }

    for (var b = 0; b < 7; b++) {
        htmlElements += '<div class="box box2" id="box2"></div>';
    }

    for (var b = 0; b < 7; b++) {
        htmlElements += '<div class="box box3" id="box3"></div>';
    }

    for (var b = 0; b < 7; b++) {
        htmlElements += '<div class="box box4" id="box4"></div>';
    }

    for (var b = 0; b < 7; b++) {
        htmlElements += '<div class="box box5" id="box5"></div>';
    }

    for (var b = 0; b < 7; b++) {
        htmlElements += '<div class="box box6" id="box6"></div>';
    }

    for (var b = 0; b < 7; b++) {
        htmlElements += '<div class="box box7" id="box7"></div>';
    }

    for (var b = 0; b < 7; b++) {
        htmlElements += '<div class="box box8" id="box8"></div>';
    }

    for (var b = 0; b < 7; b++) {
        htmlElements += '<div class="box box9" id="box9"></div>';
    }

    for (var b = 0; b < 7; b++) {
        htmlElements += '<div class="box box10" id="box10"></div>';
    }

    container.innerHTML = htmlElements;
}