
/*
 * expanding
 */ 
	// calendar
	var dobCal = appForm.getCalendar("dob");
	dobCal.attachEvent("onChange", function(data){
		appForm.setItemValue("dob",date);
	});
	
