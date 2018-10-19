function btnCalculer_onclick()
{
    var kg, poids

    poids = parseFloat(document.getElementById("txtpoids").value);
    kg = (poids*2.2);

    console.log(kg+" Kg ");
}