function btnCalculer_onclick()
{ 
 	var Nbre1, Nbre2, Operateur, TotNbres, OperateurFinal

    Nbre1 = parseInt(document.getElementById("txtNbre1").value);
    Nbre2 = parseInt(document.getElementById("txtNbre2").value);
    Operateur = document.getElementById("txtOperateur").value;

    switch (Operateur)
    {
        case "+":
            OperateurFinal = Nbre1 + Nbre2
            break;
        case "-":
            OperateurFinal = Nbre1 - Nbre2
            break;
        case "/":
            OperateurFinal = Nbre1 / Nbre2
            break;
        case "*":
            OperateurFinal = Nbre1 * Nbre2
            break;
    }

    TotNbres = OperateurFinal;

    document.getElementById("lblMessage").innerHTML = "Votre total est de :"+TotNbres ;
}