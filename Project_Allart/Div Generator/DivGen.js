window.onload = function divGen() {
    var htmlElements = "";
    var container = document.getElementById("Container");
    for (var i = 0; i < 7; i++) {
        htmlElements += '<div class="box" id="box"></div>';
        htmlElements.style.top = 50 + 'px';
    }
    container.innerHTML = htmlElements;
}