function btnCalculer_onclick()
{ 
 	var moyKmMois, totKm

    moyKmMois =  parseFloat(document.getElementById("entrerKm").value);
    totKm = ((moyKmMois*12)*5) ;

    console.log(totKm+" Km")
}