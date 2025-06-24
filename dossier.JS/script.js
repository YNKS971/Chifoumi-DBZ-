
let compteurHumain=0;
let compteurIA=0;
let choixHumain = ""
// Etape 1 LES CHOIX : 
function boiteChoix(ChoixHumain) {
    ChoixHumain = ChoixHumain
    QuiGagne(ChoixHumain, )
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
        console.log("Goku epargne Yamcha..")
        // Goku Egalité
    }
    // YAMACHA GAGNE!
    else if (ChoixHumain == "Kamehameha" && OrdiChoix == "RUSE") {
        console.log("Yamcha a gagné?")
    
    }
    
// perd

    // Goku Avoir pitié: 
    if (ChoixHumain == "Avoir pitié.." && OrdiChoix == "Sokidan") {
        console.log("Goku esquive sa pauvre attaque et gagne le combat..")
        // Goku win
    }
    else if (ChoixHumain == "Avoirpitié.." && OrdiChoix == "Supplier") {
        console.log("Goku trouve pathétique Yamcha et pars.")
        // Egalité
    }
    else if (ChoixHumain == "Avoirpitié.." && OrdiChoix == "RUSE") {
        console.log("Yamcha a joué de son intelligence et gagne le combat.")
        // Yamcha gagne 
    }
   


    // Goku Arts Martiaux:
    if (ChoixHumain == "ArtsMartiaux" && OrdiChoix == "Sudokan") {
        console.log("Yamcha gagne.??")
        compteurHumain++
        document.getElementById("compteurHumain").innerText=compteurHumain
    }
    else if (ChoixHumain == "ArtsMartiaux" && OrdiChoix == "Supplier") {
        console.log("Goku gagne")
        // goku
    }
    else if (ChoixHumain == "ArtsMartiaux" && OrdiChoix == "RUSE") {
        console.log("Goku se fait avoir????????")
        // Yamcha gagne 
    }
   

    // Yamcha:

    if (ChoixHumain == "Sudokan" && OrdiChoix == "Kamehameha") {
        console.log("Goku WIN!")
        compteurHumain++
        document.getElementById("compteurID").innerText=compteurHumain
        // GOKU WIN
    }

    else if (ChoixHumain == "Sudokan" && OrdiChoix == "ArtsMartiaux") {
        console.log("Goku recoit l'attaque de Yamcha...il décide de partir.. Yamcha gagne ")
        
    }
    // YAMACHA GAGNE!
    else if (ChoixHumain == "Sudokan" && OrdiChoix == "AvoirPitié") {
        console.log("Goku encaisse l'attaque sans problème et pars??Egalité. ")
    
    }
    
    
if (ChoixHumain == "Supplier" && OrdiChoix == "Kamehameha") {
        console.log("Goku WIN!")
        compteurHumain++
        document.getElementById("compteurID").innerText=compteurHumain
        // GOKU WIN
    }

    else if (ChoixHumain == "Supplier" && OrdiChoix == "ArtsMartiaux") {
        console.log("Goku recoit l'attaque de Yamcha...il décide de partir.. Yamcha gagne ")
        
    }
    // YAMACHA GAGNE!
    else if (ChoixHumain == "Supplier" && OrdiChoix == "AvoirPitié") {
        console.log("Goku regarde Yamcha..Yamcha pleure.Goku pars. Egalité. ")
    
    }
    
if (ChoixHumain == "RUSE" && OrdiChoix == "Kamehameha") {
        console.log("Goku WIN!")
        compteurHumain++
        document.getElementById("compteurID").innerText=compteurHumain
        // GOKU WIN
    }

    else if (ChoixHumain == "RUSE" && OrdiChoix == "ArtsMartiaux") {
        console.log("Goku est fatigué et se fait avoir! Yamcha Gagne. ")
        
    }
    // YAMACHA GAGNE!
    else if (ChoixHumain == "RUSE" && OrdiChoix == "AvoirPitié") {
        console.log("Yamcha RUSE?Goku decide d'aller manger.Egalité ")
    
    }

}


// Etape 3: Afficher le résultat: 

// document get element by ID + "resultat"

// Etape 4: Le nombre de victoires et défaites. 

function ToutesLesVies() {

}







