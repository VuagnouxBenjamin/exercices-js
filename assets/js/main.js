// ----- Fonctions pour les exercices

// --- Pair ou impair
const pairOuImpair = () => {
    let aNumber = Number(window.prompt("Veuillez saisir un nombre :", ""));
    if (isNaN(aNumber)) {
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
    if (isNaN(aAge) || aAge < 0) {
        window.alert("Vous n'avez pas saisi un nombre valide, veuillez réessayer.");
        aAge = Number(window.prompt("Veuillez resaisir votre age:", ""));
    } else if (aAge >= 18) {
        return window.alert("Vous êtes majeur");
    } else {
        return window.alert("Votre êtes mineur");
    }
};

// --- Calculatrice
const calclul = () => {
    let nb1 = Number(window.prompt("Veuillez saisir un premier nombre:", ""));
    let nb2 = Number(window.prompt("Veuillez saisir un deuxième nombre", ""));
    let operateur = window.prompt("Veuillez saisir un operateur (+ - / *)", "");
    const operateurValid = ["+", "-", "/", "*"];
    // Est ce que les imputs sont valides ?
    if (isNaN(nb1) || isNaN(nb2)) {
        window.alert("Votre premier nombre n'est pas valide, veuillez réessayer.");
        nb1 = Number(window.prompt("Veuillez resaisir votre age:", ""));
        nb2 = Number(window.prompt("Veuillez saisir un deuxième nombre", ""));
        operateur = window.prompt("Veuillez saisir un operateur (+ - / *)", "");
    }
    // Est ce que l'operateur est valide ?
    if (!operateurValid.includes(operateur)) {
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
    for (let i = userN; i > 0; i--) {
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
    for (let i = 1; i <= N; i++) {
        console.log(`${i} x ${N} = ${i*N}`)
    }
    return window.alert("Ouvrez la console (f12) pour voir le resultat")
}

// ----- Gestion des evenements

// --- Pair ou impair
let pairBtn = document.getElementById("pairImpair");
pairBtn.onclick = pairOuImpair;

// --- Majeur ou mineur
let majMin = document.getElementById("majeurMineur");
majMin.onclick = majeurOuMineur;

// --- Calculatrice
let calculatrice = document.getElementById("calculBtn");
calculatrice.onclick = calclul;

// --- Liste de prénom
let prenom = document.getElementById("prenomBtn");
prenom.onclick = listePrenom;

// --- Entiers inférieur à N
let infN = document.getElementById("infNBtn");
infN.onclick = compteInfN;

// --- Moyenne
let moy = document.getElementById("moyenneBtn");
moy.onclick = moyenne;

// --- Multiple 
let mult = document.getElementById("multipleBtn");
mult.onclick = multiple;




//-- commentaires :
// Mettre une boucle autour des "check if value is good"