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
 
    alert("Je vais modifier les divs");
    var desDiv = document.getElementsByName("lesdiv");
    console.log(desDiv[0].innerHTML);

    desDiv.forEach((UneDiv) => {
        UneDiv.innerHTML = letext;
    });
}

ModifText("Hello");

/*demande = prompt("Saisissez la valeur de N: ");
calcul = 0
while(demande > calcul){
    calcul = calcul + 1
}
alert("le resultat est : " +  calcul )*/