
/*
 * create a toolbar
 */ 
	
	// initializing on DOM
	
	document.body.innerHTML = '<div id="myToolbarCont"></div>';
	
	new dhtmlXToolbarObject("myToolbarCont");
	
	// initializing on layout
	
	appLayout.attachToolbar();
	
	// initializing on cell 
	
	appLayout.cells("a").attachToolbar();
	
	// initializing on multiple 

	var childLayout = appLayout.cells("a").attachLayout("1C");
	
	appLayout.cells("a").attachToolbar(); // 1st toolbar
	childLayout.attachToolbar(); // 2nd toolbar
	childLayout.cells("a").hideHeader(); // hide cell header
	childLayout.cells("a").attachToolbar(); // 3rd toolbar	
	
/*
 * methods
 */ 
	
	var myToolbar = appLayout.cells("a").attachToolbar();
	
	// addButton
	
	myToolbar.addButton("myButtonId", 0, "Our Button");
	
	// addButtonTwoState
	
	myToolbar.addButtonTwoState("myButton2StateId", 1, "2 State");
	
	// getItemState
	
	myToolbar.getItemState("myButton2StateId");
	
	// addSeparator
	
	myToolbar.addSeparator("sepId",2);
	
	// add Text
	
	myToolbar.addText("myTextId", 3, "A Label: ");
	
	// addButtonSelect
	
	myToolbar.addButtonSelect("mySelectId", 4, "Select Me", [
		["option1","obj","Option 1"],
		["option2","obj","Option 2"]
	]);
	
	// getListOptionSelected
	
	myToolbar.getListOptionSelected("mySelectId");
	
	// addSpacer
	
	myToolbar.addSpacer("myButtonId");
	
	// removeSpacer
	
	myToolbar.removeSpacer("myButtonId");
	
	// addSlider
	
	myToolbar.addSlider("mySlider", 5, 40, 1, 10, 4, "Low", "High");
	
	// addInput
	
	myToolbar.addInput("myInputId", 6, "Hi", 30);
	
	// getValue
	
	myToolbar.getValue("myInputId");
	
	// disable and enableItem
	
	myToolbar.disableItem("myButtonId");
	
	myToolbar.enableItem("myButtonId");
	
	// hide and showItem
	
	myToolbar.hideItem("myButtonId");
	
	myToolbar.showItem("myButtonId");
	
	// removeItem
	
	myToolbar.removeItem("myInputId");


/*
 * events
 */ 
 
 	// onClick
 	
 	myToolbar.attachEvent("onClick", function(itemId){
 		console.log(itemId);
 	});
 	
 	


