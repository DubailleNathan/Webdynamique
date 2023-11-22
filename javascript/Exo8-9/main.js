//EXO8:
/*
function ModifText(letext){
    alert("Je vais modifier la div");
    var Div = document.getElementById("DivNum1");
    Div.innerHTML = letext;
}

ModifText("Hello");
*/

//EXO9:

function ModifText(letext){
    Div.innerHTML = letext;
    alert("Je vais modifier les divs");
    var Div = document.getElementsByName("lesdiv");
    console.log(Div[3].letext); //displays "INPUT"
}

ModifText("Hello");

/*demande = prompt("Saisissez la valeur de N: ");
calcul = 0
while(demande > calcul){
    calcul = calcul + 1
}
alert("le resultat est : " +  calcul )*/