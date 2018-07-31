var guns = 'pistol1, pistol2, pistol3, pistol4, pistol5, pistol6, pistol7, sniper1, sniper2, sniper3, sniper4, sniper5, sniper6, sniper7'.split(',');
for (var g in guns) {
    var gun = document.createElement('div');
    gun.id = guns[g];
    gun.className = guns[g];
    gun.style.position = "relative";
    gun.style.fontSize = "20px";
    gun.style.textAlign = "center";
    gun.style.width = "100px";
    gun.style.height = "100px";
    gun.style.backgroundColor = "rgb(184, 184, 184)";
    gun.style.margin = "10px";
    gun.style.cursor = "pointer";
    gun.innerHTML = guns[g];
    document.getElementById("Container").appendChild(gun);

    /*if (guns.length = 7) {
        gun.style.left = "300px";
    }*/
    console.log(guns);
}




/*for (var s in snipers) {
    sniper.id = sniper[s];
    sniper.className = "guns";
    sniper.innerHTML = sniper[s];
    document.getElementById("Container").appendChild(pistol);
    document.getElementById("Container").appendChild(sniper);
}
*/