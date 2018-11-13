var NomJoueur, MeilleurJoueur, PointJoueur, TotFinal,cpt,TabJoueurNom = new Array(4),TabJoueurNumero = new Array(4);

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
    TotFinal = (TabJoueurNumero[0]+TabJoueurNumero[1]+TabJoueurNumero[2]+TabJoueurNumero[3])/4;

    document.getElementById("lblReponse").innerHTML = "Votre moyenne est de : "+TotFinal;
}

function disabledBouton()
{
    document.getElementById("btnAjouter").disabled = true;
    document.getElementById("btnTrouverMoy").disabled = false;
    document.getElementById("btnTrouverMeilleur").disabled = false;
    document.getElementById("btnTrouverPire").disabled = false;
}

function  btnTrouverMeilleur_onclick()
{
     if ((TabJoueurNumero[0] > TabJoueurNumero[1])||(TabJoueurNumero[0] > TabJoueurNumero[2])||(TabJoueurNumero[0]>TabJoueurNumero[3]))
     {
         document.getElementById("lblReponse").innerHTML = "Le meilleur joueur est le numéro 1 ";
     }
     else if ((TabJoueurNumero[1] > TabJoueurNumero[0])||(TabJoueurNumero[1] > TabJoueurNumero[2])||(TabJoueurNumero[1]>TabJoueurNumero[3]))
     {
         document.getElementById("lblReponse").innerHTML = "Le meilleur joueur est le numéro 2 ";
     }
     else if ((TabJoueurNumero[2] > TabJoueurNumero[1])||(TabJoueurNumero[2] > TabJoueurNumero[0])||(TabJoueurNumero[2]>TabJoueurNumero[3]))
     {
         document.getElementById("lblReponse").innerHTML = "Le meilleur joueur est le numéro 3 ";
     }
     else
     {
         document.getElementById("lblReponse").innerHTML = "Le meilleur joueur est le numéro 4 ";
     }
}

function  btnTrouverPire_onclick()
{
    if ((TabJoueurNumero[0] < TabJoueurNumero[1])||(TabJoueurNumero[0] < TabJoueurNumero[2])||(TabJoueurNumero[0]<TabJoueurNumero[3]))
    {
        document.getElementById("lblReponse").innerHTML = "Le pire joueur est le numéro 1 ";
    }
    else if ((TabJoueurNumero[1] < TabJoueurNumero[0])||(TabJoueurNumero[1] < TabJoueurNumero[2])||(TabJoueurNumero[1]<TabJoueurNumero[3]))
    {
        document.getElementById("lblReponse").innerHTML = "Le pire joueur est le numéro 2 ";
    }
    else if ((TabJoueurNumero[2] < TabJoueurNumero[1])||(TabJoueurNumero[2] < TabJoueurNumero[0])||(TabJoueurNumero[2]<TabJoueurNumero[3]))
    {
        document.getElementById("lblReponse").innerHTML = "Le pire joueur est le numéro 3 ";
    }
    else
    {
        document.getElementById("lblReponse").innerHTML = "Le pire joueur est le numéro 4 ";
    }
}