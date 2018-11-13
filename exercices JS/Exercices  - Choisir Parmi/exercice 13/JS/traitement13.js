function btnCalculer_onclick()
{ 
 	var Numsem, Joursem

    Numsem = parseInt(document.getElementById("txtNumSem").value);

    switch (Numsem)
    {
        case 1:
            Joursem = "Dimanche"
            break;
        case 2:
            Joursem = "Lundi"
            break;
        case 3:
            Joursem = "Mardi"
            break;
        case 4:
            Joursem = "Mercredi"
            break;
        case 5:
            Joursem = "Jeudi"
            break;
        case 6:
            Joursem = "Vendredi"
            break;
        case 7:
            Joursem = "Samedi"
            break;



    }

    document.getElementById("lblMessage").innerHTML = "Votre jour de la semaine est :"+Joursem ;

}