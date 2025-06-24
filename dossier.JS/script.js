
// Fonction compteur de vie 
// Fonction aleatoire pierre feuille ciseau
// Fonction pour savoir qui gagne (if pierre > ciseau PIERRE WIN )

let compteurHumain=0;
let compteurIA=0;
let choixHumain = ""
// Etape 1 LES CHOIX : 
function boiteChoix(ChoixHumain) {
    ChoixHumain = ChoixHumain
    QuiGagne(ChoixHumain, "Sudokan")
}

function OrdiChoix() {

}


// Etape 2: Le combat 

function QuiGagne(ChoixHumain, OrdiChoix) {

    // GOKU ATTAQUES

    // Goku Kamehameha:
    if (ChoixHumain == "Kamehameha" && OrdiChoix == "Sudokan") {
        console.log("Goku WIN!")
        compteurHumain++
        document.getElementById("compteurID").innerText=compteurHumain
        // GOKU WIN
    }

    else if (ChoixHumain == "Kamehameha" && OrdiChoix == "Supplier") {
        console.log("YAMCHA WIN!")
        // Goku Perd
    }
    // YAMACHA GAGNE!
    else if (ChoixHumain == "Kamehameha" && OrdiChoix == "RUSE") {
        console.log("Yamcha a gagné?")
    }
    else if (ChoixHumain == "Kamehameha" && OrdiChoix == "SURTOUT PAS") {
        console.log("Yamcha s'est fait exploser?..")
    }


    // Goku Avoir pitié: 
    if (ChoixHumain == "Avoir pitié.." && OrdiChoix == "Sokidan") {
        console.log("Yamacha a gagné?")
        // Yamcha a WIN
    }
    else if (ChoixHumain == "Avoirpitié.." && OrdiChoix == "Supplier") {
        console.log("Yamacha a gagné..")
    }
    else if (ChoixHumain == "Avoirpitié.." && OrdiChoix == "RUSE") {
        console.log("Goku deteste les tricheurs...")
    }
    else if (ChoixHumain == "Avoirpitié.." && OrdiChoix == "SURTOUT PAS") {
        console.log("Yamcha s'est fait exploser?..")
    }


    // Goku Arts Martiaux:
    if (ChoixHumain == "ArtsMartiaux" && OrdiChoix == "Sudokan") {
        console.log("Goku gagne")
        compteurHumain++
        document.getElementById("compteurHumain").innerText=compteurHumain
    }
    else if (ChoixHumain == "ArtsMartiaux" && OrdiChoix == "Supplier") {
        console.log("Yamacha Gagne....")
    }
    else if (ChoixHumain == "ArtsMartiaux" && OrdiChoix == "RUSE") {
        console.log("Goku se fait avoir????????")
    }
    else if (ChoixHumain == "ArtsMartiaux" && OrdiChoix == "SURTOUT PAS") {
        console.log("Yamcha s'est fait exploser...")
    }

    // Goku 
    if (ChoixHumain == "FATALITY" && OrdiChoix == "Sudokan") {
        console.log("Aneantissement")
    }
    else if (ChoixHumain == "FATALITY" && OrdiChoix == "Supplier") {
        console.log("Aneantissement")
    }
    else if (ChoixHumain == "FATALITY" && OrdiChoix == "Ruse") {
        console.log("Aneantissement")
    }
    else if (ChoixHumain == "FATALITY" && OrdiChoix == "SURTOUTPAS") {
        console.log("Aneantissement")
    }

}


// Etape 3: Afficher le résultat: 

// document get element by ID + "resultat"

// Etape 4: Le nombre de victoires et défaites. 

function ToutesLesVies() {

}







