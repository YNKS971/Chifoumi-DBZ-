
let compteurHumain = 0;
let compteurIA = 0;
let choixHumain = ""
let OrdiChoix=""
// Etape 1 LES CHOIX : 
function boiteChoix(ChoixHumain) {
    // ChoixHumain = ChoixHumain
    // console.log(ChoixHumain)
    choixHumain = ChoixHumain
    OrdiChoix_fonction()
   
    // QuiGagne(ChoixHumain,OrdiChoix)
}

function OrdiChoix_fonction() {
    let IA =["Sokidan", "Supplier", "RUSE"];
    // let IA=("Kamehameha","ArtsMartiaux","AvoirPitié..");
     OrdiChoix = IA[ Math.floor(Math.random() * 3) ] 
    
    
    QuiGagne(choixHumain)

}


// Etape 2: Le combat 

function QuiGagne(ChoixHumain) {
    // function QuiGagne(ChoixHumain, OrdiChoix) {
    
    // GOKU ATTAQUES

    console.log(choixHumain)
    console.log(OrdiChoix)
    // Goku Kamehameha:
    if (ChoixHumain == "Kamehameha" && OrdiChoix == "Sokidan") {
        // console.log("la")
        console.log("Goku WIN!")
        document.getElementById("resultat").innerText = compteurIA
        document.getElementById("resultat").innerText = "Goku gagne assez facilement."
        // GOKU WIN
    }

    else if (ChoixHumain == "Kamehameha" && OrdiChoix == "Supplier") {
        console.log("Goku epargne Yamcha..")
        document.getElementById("resultat").innerText = "Goku epargne Yamcha."
        // Goku Egalité
    }
    // YAMACHA GAGNE!
    else if (ChoixHumain == "Kamehameha" && OrdiChoix == "RUSE") {
        console.log("Yamcha a gagné?")
        document.getElementById("resultat").innerText = "Yamcha a gagné?"
    }

    // perd

    // Goku Avoir pitié: 
    if (ChoixHumain == "Avoirpitié.." && OrdiChoix == "Sokidan") {
        console.log("Goku esquive sa pauvre attaque et gagne le combat..")
        document.getElementById("resultat").innerText = "Goku esquive sa pauvre attaque et gagne le combat."
        // Goku win
    }
    else if (ChoixHumain == "Avoirpitié.." && OrdiChoix == "Supplier") {
        console.log("Goku trouve pathétique Yamcha et pars.")
        document.getElementById("resultat").innerText = "Goku trouve pathétique Yamcha et pars.Egalité."
        // Egalité
    }
    else if (ChoixHumain == "Avoirpitié.." && OrdiChoix == "RUSE") {
        console.log("Yamcha a joué de son intelligence et gagne le combat.")
        document.getElementById("resultat").innerText = "Yamcha a joué de son intelligence et gagne le combat."
        // Yamcha gagne 
    }



    // Goku Arts Martiaux:
    if (ChoixHumain == "ArtsMartiaux" && OrdiChoix == "Sokidan") {
        console.log("Yamcha gagne.??")
        compteurHumain++
        document.getElementById("resultat").innerText = "Yamcha gagne?"
    }
    else if (ChoixHumain == "ArtsMartiaux" && OrdiChoix == "Supplier") {
        console.log("Goku gagne")
        document.getElementById("resultat").innerText = "goku gagne"
        // goku
    }
    else if (ChoixHumain == "ArtsMartiaux" && OrdiChoix == "RUSE") {
        console.log("Goku se fait avoir????????")
        document.getElementById("resultat").innerText = "Goku se fait avoir"
        // Yamcha gagne 
    }


    // Yamcha:

    if (ChoixHumain == "Sudokan" && OrdiChoix == "Kamehameha") {
        console.log("Goku WIN!")
        compteurHumain++
        document.getElementById("resultat").innerText = "Goku Win"
        // GOKU WIN
    }

    else if (ChoixHumain == "Sudokan" && OrdiChoix == "ArtsMartiaux") {
        console.log("Goku recoit l'attaque de Yamcha...il décide de partir.. Yamcha gagne ")
        document.getElementById("resultat").innerText = "Goku recoit l'attaque de Yamcha...il décide de partir.. Yamcha gagne "



    }
    // YAMACHA GAGNE!
    else if (ChoixHumain == "Sudokan" && OrdiChoix == "Avoirpitié") {
        console.log("Goku encaisse l'attaque sans problème et pars??Egalité. ")
        document.getElementById("resultat").innerText = "Goku encaisse l'attaque sans problème et pars?Egalité. "


    }


    if (ChoixHumain == "Supplier" && OrdiChoix == "Kamehameha") {
        console.log("Goku WIN!")
        document.getElementById("resultat").innerText = "Goku Win "
        // GOKU WIN
    }

    else if (ChoixHumain == "Supplier" && OrdiChoix == "ArtsMartiaux") {
        console.log("Goku recoit l'attaque de Yamcha...il décide de partir.. Yamcha gagne ")
        document.getElementById("resultat").innerText = "Goku recoit l'attaque de Yamacha..goku pars...ymcha win "


    }
    // YAMACHA GAGNE!
    else if (ChoixHumain == "Supplier" && OrdiChoix == "Avoirpitié") {
        console.log("Goku regarde Yamcha..Yamcha pleure.Goku pars. Egalité. ")
        document.getElementById("resultat").innerText = "Goku regarde Yamcha..Yamcha pleure.Goku pars. Egalité. "

    }

    if (ChoixHumain == "RUSE" && OrdiChoix == "Kamehameha") {
        console.log("Goku WIN!")
        document.getElementById("resultat").innerText = "Goku Win "
        // GOKU WIN
    }

    else if (ChoixHumain == "RUSE" && OrdiChoix == "ArtsMartiaux") {
        console.log("Goku est fatigué et se fait avoir! Yamcha Gagne. ")
        document.getElementById("resultat").innerText = "Goku est fatigué et se fait avoir! Yamcha Gagne. "

    }
    // YAMACHA GAGNE!
    else if (ChoixHumain == "RUSE" && OrdiChoix == "AvoirPitié") {
        console.log("Yamcha RUSE?Goku decide d'aller manger.Egalité ")
        document.getElementById("resultat").innerText = "Yamcha RUSE?Goku decide d'aller manger.Egalité "  }

    }
    function Calcul() {
        switch (OrdiChoix) {
            case 0:
                OrdiChoix = "Sudokan"
                break;



            case 1:
                OrdiChoix = "Supplier"
                break;


            case 2:
                OrdiChoix = "RUSE"
                break;

        }
    }
