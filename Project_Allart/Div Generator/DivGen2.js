var pistols = 'pistol1, pistol2, pistol3, pistol4, pistol5, pistol6, pistol7, sniper1, sniper2, sniper3, sniper4, sniper5, sniper6, sniper7'.split(',');
for (var p in pistols) {
    var pistol = document.createElement('div');
    pistol.id = pistols[p];
    pistol.className = "pistols";
    pistol.innerHTML = pistols[p];
    document.getElementById("Container").appendChild(pistol);
    console.log(pistol.id);
    if (pistol > 7) {
        
    }
}


/*for (var s in snipers) {
    sniper.id = sniper[s];
    sniper.className = "pistols";
    sniper.innerHTML = sniper[s];
    document.getElementById("Container").appendChild(pistol);
    document.getElementById("Container").appendChild(sniper);
}
*/
