let club = [
    "RB Jasbur",
    "FK Herusia",
    "Nesse",
    "Temsoia",
    "Victora",
    "Manchester Gold"
];

console.log(`${club[Math.floor(Math.random() * club.length)]}`)

const element = document.getElementById("club1");
element.innerHTML = "${club[Math.floor(Math.random() * club.length)]}";