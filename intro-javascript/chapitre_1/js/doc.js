var h=document.head;
console.log(h);

var b = document.body;
console.log(b);


function afficherEnfant(noeud, indice){
	var longueur=noeud.childNodes.length;
	console.log("Vous avez demandé l'indice " +indice+ " de "+ noeud);
	if (indice < 0){
		console.error("indice incorrect \n La valeur demandée est négative");		
	} else if (indice > longueur){
		console.error("indice incorrect\n" + noeud + " a seulement " + longueur + " enfants.");
	} else if (noeud.nodeType !== document.ELEMENT_NODE){
		console.error("Type de noeud incorrect \n Les noeuds textuels n'ont pas d'enfants");
	} else {
		console.log(noeud.childNodes[indice]);
	}
}

afficherEnfant(document.body, 3);

var titresElts = document.getElementsByTagName("h2");
console.log(titresElts[0]);
console.log(titresElts.length);
var merveillesElts = document.getElementsByClassName("merveilles");
for (var i = 0; i < merveillesElts.length;i++) {
	console.log(merveillesElts[i]);
}

console.log(document.getElementById("contenu"));

console.log(document.querySelectorAll("p").length);

console.log(document.getElementById("contenu").innerHTML);
console.log(document.getElementById("contenu").textContent);