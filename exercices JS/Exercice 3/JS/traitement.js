function btnCalculer_onclick()
{ 
 	var argentCan, tauxChange, euro

    argentCan = parseFloat(document.getElementById("argentCan").value);
    tauxChange = parseFloat(document.getElementById("tauxChange").value);
    euro = argentCan*tauxChange;

    console.log(euro+" £ ")

}