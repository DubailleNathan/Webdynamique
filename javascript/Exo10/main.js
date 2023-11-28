//EXO9:
/*
function ModifText(letext){
 
    alert("Je vais modifier les divs");
    var desDiv = document.getElementsByName("lesdiv");
    console.log(desDiv[0].innerHTML);

    desDiv.forEach((UneDiv) => {
        UneDiv.innerHTML = letext;
    });
}

ModifText("Hello");
*/

var compteur = 0;
var compteur2 = 0;


var Div1 = document.getElementById("MaDiv1");
Div1.addEventListener("click", UneProcedureQuiChangeLeTexte);

var Div2 = document.getElementById("MaDiv2");
Div2.addEventListener("mouseover", UneProcedureQuiSurvole);

var Div3 = document.getElementById("MaDiv3");
Div3.addEventListener("keydown", UneProcedureQuiEcrit);

function UneProcedureQuiChangeLeTexte(evenement){
    compteur++;
    evenement.target.innerHTML = "On m'a cliqué dessus " + compteur + " fois";
}

function UneProcedureQuiSurvole(evenement){
    compteur2++;
    evenement.target.innerHTML = "On m'a survolé " + compteur2 + " fois";
}

function UneProcedureQuiEcrit(evenement){
    ModifText3("On a appuyé sur : ");
    evenement.target.innerHTML += evenement.key;
}

function ModifText3(letext){
 
    var Div3 = document.getElementById("MaDiv3");
    Div3.innerHTML = letext;
      
}
