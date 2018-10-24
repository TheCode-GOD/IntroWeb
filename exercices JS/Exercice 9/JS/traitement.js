function btnCalculer_onclick()
{ 
    var nbEtu, nb65, nbAutre, nbTotBillet, rabais, prix

    nbEtu = parseInt(document.getElementById("nbEtu").value);
    nb65 = parseInt(document.getElementById("nb65").value);
    nbAutre = parseInt(document.getElementById("nbAutre").value);

    nbTotBillet = nbEtu+nb65+nbAutre;

    if (nbTotBillet > 5)
    {
        rabais = 0.9;
    }
    else
    {
        rabais = 0;
    }

    prix =(nbEtu*12)+(nb65*15)+(nbAutre*20)+rabais;

    console.log("Votre nombre de billet total est de "+nbTotBillet+" et le montant a payer sera de "+prix);


}