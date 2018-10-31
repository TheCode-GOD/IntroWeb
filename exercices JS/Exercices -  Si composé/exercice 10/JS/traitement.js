function  btnCalculer_onclick()
{
    var Age, Categorie

    Age = parseInt(document.getElementById("txtAge").value);

    if ((Age > 5) && (Age < 9))
    {
        Categorie = "Poussin"
    }
    else
    {
        if ((Age == 9) || (Age == 10))
        {
            Categorie = "Pupille"
        }
        else
        {
            if ((Age > 10) && (Age < 13))
            {
                Categorie = "Minime"
            }
            else
            {
                Categorie = "Cadet"
            }
        }
    }

    document.getElementById("lblMessage").innerHTML = "Votre age est situé dans la categorie : "+Categorie;
}