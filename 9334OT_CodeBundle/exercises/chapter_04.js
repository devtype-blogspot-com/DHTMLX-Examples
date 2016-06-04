
/*
 * create a layout
 */ 
	
	// initializing on DOM
	
	new dhtmlXLayoutObject(document.body);

	new dhtmlXLayoutObject(document.body, "3E");

	var myLayout = new dhtmlXLayoutObject(document.body, "2U");
	
	// initializing on layout cell
	
	var myChildLayout = myLayout.cells("a").attachLayout("3E");
	
/*
 * methods
 */ 
	
	var myLayout = new dhtmlXLayoutObject(document.body, "3T");

	// setHeight
	
	myLayout.cells("a").setHeight(55);

	// setWidth
	
	myLayout.cells("b").setWidth(70);
	
	// fix size
	
	myLayout.cells("b").fixSize(0,1);
	
	myLayout.cells("b").fixSize(1,1);
	
	// showHeader and hideHeader
	
	myLayout.cells("c").hideHeader();
	
	myLayout.cells("c").showHeader();

	// setText
	
	myLayout.cells("a").setText("My Top Cell");

	// progressOn and progressOff
	
	myLayout.progressOn();
	
	myLayout.progressOff();

/*
 * events
 */ 
 
 	// onResizeFinish
 	
 	var myEventId = myLayout.attachEvent("onResizeFinish", function(){
 		console.log("Layout Resized");
 	});


