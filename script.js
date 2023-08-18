let innerInventory = document.getElementById("innerInventory");

function showHideInventory() {
	innerInventory.classList.toggle("hidden");
}

let strengths = [
	"Verdsettelse av skjønnhet og dyktighet",
	"Forsiktighet",
	"Mot",
	"Kreativitet",
	"Nysgjerrighet",
	"Utholdenhet",
	"Rettferdighet",
	"Tilgivelse",
	"Vennlighet",
	"Takknemlighet",
	"Ærlighet",
	"Samarbeid og lojalitet",
	"Håp",
	"Ydmykhet",
	"Humor",
	"Initiativ",
	"Dømmekraft",
	"Lederskap",
	"Kjærlighet",
	"Selv-regulering",
	"Sosial intelligens",
	"Åndelighet",
	"Lærelyst",
	"Visdom",
];

function makeContainers(n) {
	for (let i = 0; i < n; i++) {
		document.getElementById("itemBox").innerHTML += /*HTML*/ `
    
    <div onclick="addToInventory(this)" class="container">
    <img  src="images/${strengths[i]}.png" />
    ${strengths[i]}
    </div>
    
    `;
	}
}
makeContainers(24);

function addToInventory(thisElement) {
	innerInventory.innerHTML += /*HTML*/ `
	${thisElement.innerHTML}
	`;
	// thisElement.classList.toggle("frame");

	console.log(innerInventory);
	console.log(thisElement);
}

function emptyInventory() {
	innerInventory.innerHTML = "";
}
