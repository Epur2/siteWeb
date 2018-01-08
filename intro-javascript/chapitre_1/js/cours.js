var Personnage = {
	
	initPersonnage: function(nom, sante, force){
		this.nom=nom;
		this.sante=sante;
		this.force=force;
	},

	soin: function(soin, cible) {
		console.log("\n");
		console.log(cible.nom+" gagne " + soin + " points de vie.");
		cible.sante += soin;
		console.log(cible.nom +" à maintenant "+ cible.sante + " points de vie");
	},

	attaquer: function(cible) {
		if(this.sante>0){
			var degats=this.force;
			console.log(this.nom + " attaque " + cible.nom + " et lui fait " + degats + " points de dégats");
			cible.sante -=degats;
			if (cible.sante>0){
				console.log(cible.nom + " à encore " + cible.sante + " points de vie.");
			}
			else{
				cible.sante=0;
				console.log(cible.nom + " est mort!");
			}
		}
		else{
			console.log(this.nom + " est mort. Il ne peut plus attaquer");
		}
	}
};


/*Initialisation des adversaires*/

var Adversaire= Object.create(Personnage);
Adversaire.initAdversaire= function(nom, sante, force, race, valeur){
	this.initPersonnage(nom, sante, force);
	this.race=race;
	this.valeur=valeur;
};
Adversaire.decrire= function() {
	console.log("\n");
	console.log(this.nom);
	console.log("point de vie: " + this.sante);
	console.log("force:" + this.force);
	console.log("race: " + this.race);
	console.log("valeur: "+ this.valeur);
};


/*initialisation des joueurs*/

var Joueur = Object.create(Personnage);
Joueur.initJoueur= function(nom, sante, force){
	this.initPersonnage(nom, sante, force);
	this.experience=0;

};

Joueur.decrire=function(){
	console.log("\n");
	console.log(this.nom);
	console.log("point de vie: " + this.sante);
	console.log("force:" + this.force);	
	console.log("experience"+ this.experience);
};

Joueur.combattre=function(cible){

	this.attaquer(cible);
	if(cible.sante === 0){
		console.log(cible.nom + " a été tué");		
		console.log(this.nom+ " gagne "+cible.valeur + " points d'experience");
		this.experience+=cible.valeur;			
		}
			
	}
};



var perso1 = Object.create(Joueur);
perso1.initJoueur("Aurora",150,25);


var perso2 = Object.create(Joueur);
perso2.initJoueur("Gladius", 220, 45);

var ennemi1 = Object.create(Adversaire);
ennemi1.initAdversaire("Barzul", 500,80,"descendant de l'obscur",200);
perso1.decrire();
perso2.decrire();
ennemi1.decrire();

ennemi1.attaquer(perso1);
perso2.combattre(ennemi1);