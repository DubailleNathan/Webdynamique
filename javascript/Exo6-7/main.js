function factoriel(n) {
    let resultat = n;
    
    for(i = 0; i < n; i++){
        stock = factoriel(i); 
        n += stock;
    }
    return resultat;
}





/*
while (var i < parseInt(n)){
    factoriel(n) = i;
    i++;
}
*/

