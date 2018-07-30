var guns = 'sniper, smg, gun, pistol, shotgun, pistol2, pistol3, pistol4, pistol5'.split(',');
for (var c in guns) {
    var gun = document.createElement('div');
    gun.id = guns[c];
    gun.className = "guns";
    gun.innerHTML = guns[c];
    document.getElementById("Container").appendChild(gun);
}

