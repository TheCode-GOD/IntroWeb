function btnCalculer_onclick()
{ 
 	var Revenus, Loyer, Nourriture, Deplacement, Reste

    Revenus = parseInt(document.getElementById("Revenus").value);
 	Loyer = parseInt(document.getElementById("Loyer").value);
 	Nourriture = parseInt(document.getElementById("Nourriture").value);
 	Deplacement = parseInt(document.getElementById("Deplacement").value);

 	Reste = ((Revenus-Loyer-Nourriture-Deplacement)/4);

    console.log(Reste+" $ pour la semaine ");

}