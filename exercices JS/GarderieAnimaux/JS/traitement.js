function btnCalculer_onclick()
{ 
 	var Veterinaire, NbreJours, Serv, animaux, prixParJour, totPrix, Prix, Final, Montant

    Veterinaire = document.getElementById("lstVeterinaire").value;
 	NbreJours = parseInt(document.getElementById("txtNbreJours").value);

 	Montant=0;

    toilettage();
    animal();
    nbreMontant();
    montantveterinaire();

function toilettage()
{
    if (document.getElementById("chkServ").checked == true)
    {
        Serv = "avec service de toilettage ";
        Prix=5;
    }
    else
    {
        Serv = "sans service de toilettage ";
        Prix=0;
    }
}
function animal()
{
    if (document.getElementById("radChat").checked == true)
    {
        animaux = "chat ";
        prixParJour = 17;

    }
    else
    {
        animaux = "chien ";
        prixParJour = 16;

    }
}
  function nbreMontant() {

  }

    if (NbreJours < 5 && NbreJours > 10)
    {
        Montant = Montant*0.95;
    }
    else if (NbreJours < 10 && NbreJours > 30)
    {
        Montant = Montant*0.9;
    }
    else if (NbreJours > 30)
    {
        Montant =  Montant*0.85;
    }
function montantveterinaire() {
    switch (Veterinaire)
    {
        case"Audrey Bouchard":
            Montant = Montant+(NbreJours*25);
            break;
        case"Stéphane Tremblay":
            Montant = Montant+(NbreJours*35);
            break;
        case"Maxime Simard":
            Montant = Montant+(NbreJours*40);
            break;
        case"Mélissa Caron":
            Montant = Montant+(NbreJours*45);
            break;
    }
}







     //16.25 chien / 19.50 chat

    totPrix = (NbreJours*prixParJour)+Prix;

    document.getElementById("lblMessage").innerHTML = "Vétérinaire responsable est " + Veterinaire + ". Le montant pour la garde de votre " + animaux + " est de " + totPrix + "$ pour " + NbreJours + " jour(s)," + Serv+" / un montant suplémentaire de "+Montant+"$  devra etre pour le vétérinaire";





}