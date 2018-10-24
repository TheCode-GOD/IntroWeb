function btnCalculer_onclick()
{ 
 	var Destination, Distance, Consomation, Essence, Cout

    Destination = document.getElementById("Destination").value;
 	Distance = parseFloat(document.getElementById("Distance").value);
 	Consomation = parseFloat(document.getElementById("Consomation").value);
 	Essence = parseFloat(document.getElementById("Essence").value);

 	Cout = ((Distance/100)*Consomation*Essence);

    console.log(Cout.toFixed(2)+" $ "+"pour aller à "+Destination);

}