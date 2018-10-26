function btnCalculer_onclick()
{ 
 	var Veterinaire, NbreJours, Serv, animaux, prixParJour, totPrix, Prix, Final

    Veterinaire = document.getElementById("lstVeterinaire").value;
 	NbreJours = parseInt(document.getElementById("txtNbreJours").value);


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

     //16.25 chien / 19.50 chat

    totPrix = (NbreJours*prixParJour)+Prix;

    console.log("Vétérinaire responsable est " + Veterinaire + ". Le montant pour la garde de votre " + animaux + " est de " + totPrix + "$ pour " + NbreJours + " jour(s)," + Serv);



}