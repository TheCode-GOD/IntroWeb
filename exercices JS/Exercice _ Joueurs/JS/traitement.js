var NomJoueur, MeilleurJoueur,  PointJoueur, cpt,TabJoueurNom = new Array(4),TabJoueurNumero = new Array(4);

TotFinal = 0;
cpt=0;
MeilleurJoueur="";




function btnAjouter_onclick()
{

    TabJoueurNom[cpt] = document.getElementById("txtNom").value;

    TabJoueurNumero[cpt] = parseInt(document.getElementById("txtPoints").value);

    document.getElementById("lblNbreJoueur").innerHTML = "Entrer le joueur numero "+ (cpt+2);

    cpt++

    if (cpt ==4)
    {
        disabledBouton();

        document.getElementById("lblNbreJoueur").innerHTML = "Entrer la prochaine action. ";
    }
}
function btnTrouverMoy_onclick()
{
    var TotFinal

    TotFinal = (TabJoueurNumero[0]+TabJoueurNumero[1]+TabJoueurNumero[2]+TabJoueurNumero[3])/4;

    document.getElementById("lblReponse").innerHTML = "Votre moyenne est de : "+TotFinal;

    return TotFinal;
}

function disabledBouton()
{
    document.getElementById("btnAjouter").disabled = true;
    document.getElementById("btnTrouverMoy").disabled = false;
    document.getElementById("btnTrouverMeilleur").disabled = false;
    document.getElementById("btnTrouverPire").disabled = false;
}



function  btnTrouverPire_onclick()
{
    var PlusPetitJoueur

    for (i = 0; i < TabJoueurNumero.length; i++) {


        if (TabJoueurNumero[i] < PlusPetitJoueur) {
            PlusPetitJoueur = TabJoueurNom[i];
        }
    }

    return PlusPetitJoueur;

    document.getElementById("lblReponse").innerHTML = "Le pire joueur est le numéro " + TabJoueurNumero[i]


}

function  btnTrouverMeilleur_onclick()
{
    var PlusgrandJoueur

    for (i = 0; i < TabJoueurNumero.length; i++) {


        if (TabJoueurNumero[i] > PlusgrandJoueur) {
            PlusgrandJoueur = TabJoueurNom[i];
        }
    }

    return PlusgrandJoueur;

    document.getElementById("lblReponse").innerHTML = "Le meillleur joueur est le numéro " + TabJoueurNumero[i]
}

/*if ((TabJoueurNumero[0] < TabJoueurNumero[1])||(TabJoueurNumero[0] < TabJoueurNumero[2])||(TabJoueurNumero[0]<TabJoueurNumero[3]))
    {
        PlusPetitJoueur = 1;

    }
    else if ((TabJoueurNumero[1] < TabJoueurNumero[0])||(TabJoueurNumero[1] < TabJoueurNumero[2])||(TabJoueurNumero[1]<TabJoueurNumero[3]))
    {
        PlusPetitJoueur = 2;

    }
    else if ((TabJoueurNumero[2] < TabJoueurNumero[1])||(TabJoueurNumero[2] < TabJoueurNumero[0])||(TabJoueurNumero[2]<TabJoueurNumero[3]))
    {
        PlusPetitJoueur = 3;

    }
    else
    {
        PlusPetitJoueur = 4;*/


