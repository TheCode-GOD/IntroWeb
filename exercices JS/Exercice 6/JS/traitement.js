function btnCalculer_onclick()
{ 
 	var UnCent, CinqCent, DixCent, VingtCinqCent, TotCent

    UnCent = parseFloat(document.getElementById("UnCent").value);
 	CinqCent = parseFloat(document.getElementById("CinqCent").value);
 	DixCent = parseFloat(document.getElementById("DixCent").value);
 	VingtCinqCent = parseFloat(document.getElementById("VingtCinqCent").value);

 	TotCent = ((UnCent*0.01)+(CinqCent*0.05)+(DixCent*0.1)+(VingtCinqCent*0.25));

    console.log(TotCent+" $ Canadien Tire");

}