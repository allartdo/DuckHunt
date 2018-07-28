window.onload = function divGen() {
    var htmlElements = "";
    var container = document.getElementById("Container");
    var box = document.getElementById('box');
    for (var a = 0; a < 7; a++) {
        htmlElements += '<div class="box" id="box"></div>';
    }

    for (var b = 0; b < 7; b++) {
        htmlElements += '<div class="box2" id="box2"></div>';
    }

    for (var b = 0; b < 7; b++) {
        htmlElements += '<div class="box2" id="box2"></div>';
    }

    for (var b = 0; b < 7; b++) {
        htmlElements += '<div class="box2" id="box2"></div>';
    }

    for (var b = 0; b < 7; b++) {
        htmlElements += '<div class="box2" id="box2"></div>';
    }

    for (var b = 0; b < 7; b++) {
        htmlElements += '<div class="box2" id="box2"></div>';
    }

    container.innerHTML = htmlElements;
}