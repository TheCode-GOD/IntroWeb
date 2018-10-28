function btnCalculer_onclick()
{
    var BasePrix, Age, TotPrix, Reduction

    BasePrix = parseInt(document.getElementById("txtBasePrix").value);
    Age = parseInt(document.getElementById("txtAge").value);

    if(Age < 17)
    {
        if(document.getElementById("radMidi").checked == true)
        {
            Reduction = 0.4;
        }
        else
        {
            Reduction = 0.6;
        }
    }
    else
    {
       if(document.getElementById("radMidi").checked == true)
       {
           Reduction = 0.7;
       }
       else
       {
           Reduction = 1;
       }
    }

    TotPrix = (BasePrix+Reduction);

    console.log("Votre billet coutera "+TotPrix+"$");
}