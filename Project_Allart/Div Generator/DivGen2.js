var pistols = 'pistol 1, pistol 2, pistol 3, pistol 4, pistol 5, pistol 6, pistol 7'.split(',');
var pistols2 = 'pistol 8, pistol 9, pistol 10, pistol 11, pistol 12, pistol 13, pistol 14'.split(',');
var snipers = 'sniper 1, sniper 2, sniper 3, sniper 4, sniper 5, sniper 6, sniper 7'.split(',');
var snipers2 = 'sniper 8, sniper 9, sniper 10, sniper 11, sniper 12, sniper 13, sniper 14'.split(',');
var shotguns = 'shotgun 1, shotgun 2, shotgun 3, shotgun 4, shotgun 5, shotgun 6, shotgun 7'.split(',');
var shotguns2 = 'shotgun 8, shotgun 9, shotgun 10, shotgun 11, shotgun 12, shotgun 13, shotgun 14'.split(',');
var dubbleBarrels = 'dubbleBarrel 1, dubbleBarrel 2, dubbleBarrel 3, dubbleBarrel 4, dubbleBarrel 5, dubbleBarrel 6, dubbleBarrel 7'.split(',');
var dubbleBarrels2 = 'dubbleBarrel 8, dubbleBarrel 9, dubbleBarrel 10, dubbleBarrel 11, dubbleBarrel 12, dubbleBarrel 13, dubbleBarrel 14'.split(',');
var automaticRifles = 'Automatic- rifle 1, Automatic- rifle 2, Automatic- rifle 3, Automatic- rifle 4, Automatic- rifle 5, Automatic- rifle 6, Automatic- rifle 7'.split(',');
var automaticRifles2 = 'Automatic- rifle 8, Automatic- rifle 9, Automatic- rifle 10, Automatic- rifle 11, Automatic- rifle 12, Automatic- rifle 13, Automatic- rifle 14'.split(',');


//Pistols || 1-7

for (var p in pistols) {
    var pistol = document.createElement('div');
    pistol.id = pistols[p];
    pistol.className = "Pistols";
    pistol.innerHTML = pistols[p];
    document.getElementById("Container").appendChild(pistol);
}

//Pistols2 || 8-14

for (var p2 in pistols2) {
    var pistol2 = document.createElement('div');
    pistol2.id = pistols2[p2];
    pistol2.className = 'Pistols Pistols2';
    pistol2.innerHTML = pistols2[p2];
    document.getElementById("Container").appendChild(pistol2);
}

//Snipers || 1-7

for (var s in snipers) {
    var sniper = document.createElement('div');
    sniper.id = snipers[s];
    sniper.className = 'Pistols Snipers';
    sniper.innerHTML = snipers[s];
    document.getElementById("Container").appendChild(sniper);
}

//Snipers2 || 8-14

for (var s2 in snipers2) {
    var sniper2 = document.createElement('div');
    sniper2.id = snipers2[s2];
    sniper2.className = 'Pistols Snipers2';
    sniper2.innerHTML = snipers2[s2];
    document.getElementById("Container").appendChild(sniper2);
}

//Shotguns || 1-7

for (var sg in shotguns) {
    var shotgun = document.createElement('div');
    shotgun.id = shotguns[sg];
    shotgun.className = 'Pistols Shotguns';
    shotgun.innerHTML = shotguns[sg];
    document.getElementById("Container").appendChild(shotgun);
}

//Shotguns2 || 8-14

for (var sg2 in shotguns2) {
    var shotgun2 = document.createElement('div');
    shotgun2.id = shotguns2[sg2];
    shotgun2.className = 'Pistols Shotguns2';
    shotgun2.innerHTML = shotguns2[sg2];
    document.getElementById("Container").appendChild(shotgun2);
}

//dubbleBarrel || 1-7

for (var db in dubbleBarrels) {
    var dubbleBarrel = document.createElement('div');
    dubbleBarrel.id = dubbleBarrels[db];
    dubbleBarrel.className = 'Pistols dubbleBarrels';
    dubbleBarrel.innerHTML = dubbleBarrels[db];
    document.getElementById("Container").appendChild(dubbleBarrel);
}

//dubbleBarrel2 || 8-14

for (var db2 in dubbleBarrels2) {
    var dubbleBarrel2 = document.createElement('div');
    dubbleBarrel2.id = dubbleBarrels2[db2];
    dubbleBarrel2.className = 'Pistols dubbleBarrels2';
    dubbleBarrel2.innerHTML = dubbleBarrels2[db2];
    document.getElementById("Container").appendChild(dubbleBarrel2);
}

//automaticRifle || 1-7

for (var ar in automaticRifles) {
    var automaticRifle = document.createElement('div');
    automaticRifle.id = automaticRifles[ar];
    automaticRifle.className = 'Pistols automaticRifles';
    automaticRifle.innerHTML = automaticRifles[ar];
    document.getElementById("Container").appendChild(automaticRifle);
}

//automaticRifle2 || 8-14

for (var ar2 in automaticRifles2) {
    var automaticRifle2 = document.createElement('div');
    automaticRifle2.id = automaticRifles2[ar2];
    automaticRifle2.className = 'Pistols automaticRifles2';
    automaticRifle2.innerHTML = automaticRifles2[ar2];
    document.getElementById("Container").appendChild(automaticRifle2);
}