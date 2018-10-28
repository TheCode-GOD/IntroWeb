function btnCalculer_onclick()
{
    var BasePrix, Age, TotPrix, Reduction, ChoixFilm, MomentJournee

    BasePrix = parseInt(document.getElementById("txtBasePrix").value);
    Age = parseInt(document.getElementById("txtAge").value);
    ChoixFilm = document.getElementById("lstOptions").value;

    if(Age < 17)
    {
        if(document.getElementById("chkMiSession").checked == true)
        {
            if(document.getElementById("radMidi").checked == true)
            {
                Reduction = 0.4;
                MomentJournee = "Midi ";
            }
            else
            {
                Reduction = 0.6;
                MomentJournee = "soir ";
            }
        }
        else
        {
            if(document.getElementById("radMidi").checked == true)
            {
                Reduction = 1;
                MomentJournee = "Midi ";
            }
            else
            {
                Reduction = 1;
                MomentJournee = "soir ";
            }
        }
    }
    else
    {
       if(document.getElementById("chkMiSession").checked == true)
       {
           if(document.getElementById("radMidi").checked == true)
           {
               Reduction = 0.7;
               MomentJournee = "Midi ";
           }
           else
           {
               Reduction = 1;
               MomentJournee = "soir ";
           }
       }
       else
       {
           if(document.getElementById("radMidi").checked == true)
           {
               Reduction = 1;
               MomentJournee = "Midi ";
           }
           else
           {
               Reduction = 1;
               MomentJournee = "soir ";
           }
       }
    }

    TotPrix = (BasePrix*Reduction);

    console.log("Un billet du "+MomentJournee+"pour un spectateur de "+Age+"ans Coute "+TotPrix+"$ pour le film "+ChoixFilm+".");
}