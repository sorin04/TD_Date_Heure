console.log("test js");
document.onreadystatechange = function () {
    console.log(document.readyState)
    if(document.readyState == 'interactive') {
        console.log("c'est ok")
    }
}
    let debutDate = document.getElementById('debut_date');
    let endDate = document.getElementById('date_fin');
    let debutHeure=document.getElementById('debut_heure');
    let heure_Fin=document.getElementById('heure_fin');
    let resultat = document.getElementById("resultat");
    let value1;
    let value2;

    debutDate.onchange = function () {
        value1 = debutDate.valueAsDate.getTime();
        if (value2 != null) {
            calculerDifference();

        }
    }

    endDate.onchange = function () {
        value2 = endDate.valueAsDate.getTime();
        if (value1 != null) {
            calculerDifference();

        }
    }
function calculerDifference() {
    let diff = Math.abs(value2 - value1);
    let jours = Math.floor(diff / (1000 * 60 * 60 * 24));
    let mois = Math.floor(jours / 30);
    let annees = Math.floor(mois / 12);

    let texteDifference = "L'écart entre les dates est de " + jours + " jours, " + mois + " mois, et " + annees + " années.";

    resultat.innerText = texteDifference;
}