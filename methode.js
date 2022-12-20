//Objet constructeur
let deco = function (myCouleur, myHauteur, myLargeur, myText, myMarginter, myPosition, myGauche, myHaut, myAligne, myTaille, myIndex) {
    this.couleur = myCouleur;
    this.hauteur = myHauteur;
    this.largeur = myLargeur;
    this.text = myText;
    this.marginter = myMarginter;
    this.position = myPosition;
    this.gauche = myGauche;
    this.haut = myHaut;
    this.aligne = myAligne;
    this.taille = myTaille;
    this.index = myIndex;

    this.bloc = function () {
        let div = document.createElement('div');
        div.style.backgroundColor = this.couleur;
        div.style.height = this.hauteur;
        div.style.width = this.largeur;
        div.style.zIndex = this.index;
        return div;
    }

    this.message = function () {
        let message = document.createElement('div');
        message.style.backgroundColor = this.couleur;
        message.style.height = this.hauteur;
        message.style.width = this.largeur;
        message.style.position = this.position;
        message.style.left = this.gauche;
        message.style.top = this.haut;
        return message;
    }

    this.bouton = function () {
        let bouton = document.createElement('button');
        bouton.style.backgroundColor = this.couleur;
        bouton.style.padding = this.marginter;
        bouton.innerText = this.text;
        bouton.style.position = this.position;
        bouton.style.left = this.gauche;
        bouton.style.top = this.haut;
        bouton.style.fontSize = this.taille;
        return bouton;
    }

    this.paragraphe = function () {
        let para = document.createElement('p');
        para.innerText = this.text;
        para.style.position = this.position;
        para.style.left = this.gauche;
        para.style.top = this.haut;
        para.style.textAlign = this.aligne;
        para.style.fontSize = this.taille;
        return para;
    }
}

//Création d'objet enfant
let ecran = new deco("lightgrey", "765px", "100%", "", "", "fixed", "", "", "", "", "12");
let mesure = ecran.bloc();
let fenetre = new deco("white", "400px", "600px", "", "", "relative", "30%", "175px");
let carreaux = fenetre.message();
mesure.append(carreaux);
let ecriture = new deco("", "", "", "Ceci est une fenêtre modal, appuiez sur OK pour continuer", "", "relative", "", "150px", "center", "20px");
let test = ecriture.paragraphe();
carreaux.append(test);
let valide = new deco("blue", "", "", "OK", "20px 50px", "relative", "39%", "200px", "", "20px");
let passe = valide.bouton();
passe.addEventListener('click', function () {
    contenue.style.display = "flex";
    mesure.remove();
})
carreaux.append(passe);
body = document.querySelector('body');

let contenue = document.getElementById('contenue');
contenue.style.zIndex = "-1";
contenue.style.display = "flex";
contenue.style.flexDirection = "column";
contenue.style.alignItems = "flex-start";


let ouvrir = document.getElementById('ouvrir');
ouvrir.addEventListener('click', function () {
    body.append(mesure);
    contenue.style.display = "none";
})


