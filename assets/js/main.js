// ----- DECLARATION DES VARIABLES GLOBALES

// --- Pair ou impair
let pairBtn = document.getElementById("pairImpair");

// --- Majeur ou mineur
let majMin = document.getElementById("majeurMineur");

// --- Calculatrice
let calculatrice = document.getElementById("calculBtn");

// --- Liste de prénom
let prenom = document.getElementById("prenomBtn");

// --- Entiers inférieur à N
let infN = document.getElementById("infNBtn");

// --- Moyenne
let moy = document.getElementById("moyenneBtn");

// --- Multiple 
let mult = document.getElementById("multipleBtn");

// --- Voyelles 
let voy = document.getElementById('voyelleBtn');

// --- Produit & Image 
let prodImg = document.getElementById("produitBtn");
let prodCard = document.getElementById("produitCard");
let prodText = document.getElementById("produitTxt");
let hideCard = document.getElementById("hideImg");

// --- String Token
let strToken = document.getElementById("strTokBtn");

// --- Créer un tableau
let tableauBtn = document.getElementById("tableauBtnId");

// ----- DECLARATION DES FONCTIONS

// --- Pair ou impair
const pairOuImpair = () => {
    let aNumber = Number(window.prompt("Veuillez saisir un nombre :", ""));
    while (isNaN(aNumber)) {
        window.alert("Vous n'avez pas saisi un nombre, veuillez réessayer.");
        aNumber = Number(window.prompt("Veuillez resaisir un nombre :", ""));
    };
    if (aNumber % 2 == 0) {
        return window.alert("Votre nombre est pair");
    } else {
        return window.alert("Votre nombre est impair");
    }
};

// --- Majeur ou mineur
const majeurOuMineur = () => {
    let aAge = Number(window.prompt("Veuillez saisir votre age:", ""));
    while (isNaN(aAge) || aAge < 0) {
        window.alert("Vous n'avez pas saisi un nombre valide, veuillez réessayer.");
        aAge = Number(window.prompt("Veuillez resaisir votre age:", ""));
    }
    aAge >= 18 ?
        window.alert("Vous êtes majeur") : window.alert("Votre êtes mineur");
};

// --- Calculatrice
const calclul = () => {
    let nb1 = Number(window.prompt("Veuillez saisir un premier nombre:", ""));
    let nb2 = Number(window.prompt("Veuillez saisir un deuxième nombre", ""));
    let operateur = window.prompt("Veuillez saisir un operateur (+ - / *)", "");
    const operateurValid = ["+", "-", "/", "*"];
    // Est ce que les imputs sont valides ?
    while (isNaN(nb1) || isNaN(nb2)) {
        window.alert("Votre premier nombre n'est pas valide, veuillez réessayer.");
        nb1 = Number(window.prompt("Veuillez resaisir votre age:", ""));
        nb2 = Number(window.prompt("Veuillez saisir un deuxième nombre", ""));
        operateur = window.prompt("Veuillez saisir un operateur (+ - / *)", "");
    }
    // Est ce que l'operateur est valide ?
    while (!operateurValid.includes(operateur)) {
        window.alert("Votre operateur n'est pas valide, veuillez réessayer.");
        nb1 = Number(window.prompt("Veuillez resaisir votre age:", ""));
        nb2 = Number(window.prompt("Veuillez saisir un deuxième nombre", ""));
        operateur = window.prompt("Veuillez saisir un operateur (+ - / *)", "");
    }
    // Calcul si toutes les valeurs sont valides ?
    let result;
    if (operateur == "+") {
        result = nb1 + nb2;
    } else if (operateur == "-") {
        result = nb1 - nb2;
    } else if (operateur == "/") {
        result = nb1 / nb2;
    } else if (operateur == "*") {
        result = nb1 * nb2;
    }
    return window.alert(result);
};

const listePrenom = () => {
    let nameArr = [];
    let name = '';
    do {
        // Instructions :
        name = window.prompt("Veuillez saisir un prénom", "");
        // Actualisation :
        if (name == null) {
            break;
        } else if (name.length > 1) {
            nameArr.push(name);
        }
    } while (name != "");
    return window.alert(`Vous avez saisi ${nameArr.length} prénoms : ${nameArr.join(", ")} `, "");
};

// --- Entiers inférieur à N
const compteInfN = () => {
    let arr = [];
    let userN = window.prompt("Veuillez saisir un nombre", "");
    while (isNaN(userN)) {
        userN = window.prompt("ERREUR : Valeur invalide, veuillez saisir un nombre", "");
    };
    for (let i = userN - 1; i > 0; i--) {
        arr.push(i)
    };
    return window.alert(arr.join(', '))
};

// --- Moyenne
const moyenne = () => {
    let arr = [];
    let note = Number(window.prompt("Veuillez saisir une note ou entrez 0 pour arreter la saisie", ""));
    while (isNaN(note)) {
        note = Number(window.prompt("ERREUR : Valeur invalide, Veuillez saisir une note ou entrez 0 pour arreter la saisie", ""));
    };
    while (note > 0) {
        note = Number(window.prompt("Veuillez saisir une nouvelle note ou entrez 0 pour arreter la saisie", ""));
        if (note == 0) {
            break
        }
        arr.push(note)
    }
    let result = arr.reduce((acc, curr) => acc + curr) / (arr.length + 1);
    console.log(result)
    return window.alert(`La moyenne est de ${result}`)
}

// --- Multiple 
const multiple = () => {
    let N = Number(window.prompt("Veuillez entrez votre multiple", ""));
    while (isNaN(N)) {
        N = Number(window.prompt("ERREUR : Valeur invalide, veuillez entrez votre multiple", ""));
    };
    let X = Number(window.prompt("Veuillez entrez le nombre d'itération désiré", ""));
    while (isNaN(X)) {
        X = Number(window.prompt("ERREUR : Valeur invalide, veuillez entrez le nombre d'itération désiré", ""));
    };
    for (let i = 1; i <= X; i++) {
        console.log(`${i} x ${N} = ${i*N}`)
    }
    return window.alert("Ouvrez la console (f12) pour voir le resultat")
}

// --- Voyelle 
const voyelleCount = () => {
    let word = window.prompt("Veuillez entrer un mot", "");
    let letters = word.split("");
    let voyels = ['a', 'e', 'i', 'o', 'u', 'y'];
    let count = 0;
    for (let i = 0; i < letters.length; i++) {
        if (voyels.includes(letters[i])) {
            count++
        }
    }
    return window.alert(`"${word}" comprend ${count} voyelles`)
}

// --- Produit & Image 
const hideResult = (event) => {
    prodCard.hidden = true;
};

const produitImage = () => {
    // Imput utilisateur & validation des données. 
    let x = Number(window.prompt("Entrez un nombre", ""));
    while (isNaN(x)) {
        x = Number(window.prompt("Valeur invalide, entrez un nombre", ""))
    }
    let y = Number(window.prompt("Entrez un multiplicateur", ""));
    while (isNaN(y)) {
        y = Number(window.prompt("Valeur invalide, entrez un multiplicateur", ""));
    }
    // Affichage de la carte
    prodText.innerHTML = `Le cube de ${x} est égale à ${x*x*x}, <br> le produit de ${x} x ${y} est égal à ${x*y}`;
    prodCard.hidden = false;
    hideCard.addEventListener("click", hideResult)
}

// --- String Token
const strTok = () => {
    // imput utilisateur & validation des données.
    let str1 = window.prompt("Entrez votre liste de mot séparée par votre séparateur préféré");
    let str2 = window.prompt("Entrez le séparateur de votre liste de mot");
    let arr = str1.split(str2);
    console.log("🚀 ~ file: main.js ~ line 202 ~ strTok ~ arr", arr)
        // Verification n pas plus grand que le nombre d'item dans str1. 
    let n = Number(window.prompt("Entrez le nième (nombre) mot à éxtraire"));
    while (n <= 0 || n > arr.length) {
        n = Number(window.prompt("Valeur invalide, entrez le nième (nombre) mot à éxtraire"));
    };
    return window.alert(`Le mot que vous avez choisi est : ${arr[(n-1)]}`)
}

// --- Créer un tableau
const tableau = () => {
    // choix de la taille du tableau. 
    let x = Number(window.prompt("Entrez la taille du tableau (nombre)"));
    // boucle x fois, x étant la taille du tableau. 
    let arr = new Array;
    let item;
    for (let i = 1; i <= x; i++) {
        item = window.prompt(`Entrez la valeur n° ${i}`)
        arr.push(item)
    }
    // affichage du contenu du tableau. 
    return window.alert("Votre tableau : [" + arr + "]")
}

// ----- GESTION DES EVENEMENTS GLOBAUX

// --- Pair ou impair
pairBtn.onclick = pairOuImpair;

// --- Majeur ou mineur
majMin.onclick = majeurOuMineur;

// --- Calculatrice
calculatrice.onclick = calclul;

// --- Liste de prénom
prenom.onclick = listePrenom;

// --- Entiers inférieur à N
infN.onclick = compteInfN;

// --- Moyenne
moy.onclick = moyenne;

// --- Multiple 
mult.onclick = multiple;

// --- Voyelles 
voy.onclick = voyelleCount;

// --- Produit & Image 
prodImg.onclick = produitImage;

// --- String Token
strToken.onclick = strTok;

// --- Créer un tableau
tableauBtn.onclick = tableau;
//-- commentaires :
// Mettre une boucle autour des "check if value is good" - DONE
// Decalrer les variables en hat de la feuille. 
// Declarer les event après les fonctions.