var settingsClick = 0;

function settingsButton() {
    if (settingsClick == 0) {
        document.getElementById('settingsMenu').style.display = 'block';
        settingsClick = 1;
    }

   else if (settingsClick == 1) {
        document.getElementById('settingsMenu').style.display = 'none';
        settingsClick = 0;
    }
}