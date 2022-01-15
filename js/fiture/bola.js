let club = [
    "RB Jasbur",
    "FK Herusia",
    "Nesse",
    "Temsoia",
    "Victora",
    "Manchester Gold"
];

console.log(`${club[Math.floor(Math.random() * club.length)]}`)

document.getElementById("club1").innerHTML = "${club[Math.floor(Math.random() * club.length)]}";