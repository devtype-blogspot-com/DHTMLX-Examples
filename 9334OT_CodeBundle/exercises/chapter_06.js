
// Well hello there. The grid greatness awaits you and your limber coding fingers.

/*
 * create a grid
 */ 
	
	// initializing on DOM
	
	document.body.innerHTML = '<div id="myGridCont"></div>';
	
	var myGrid = new dhtmlXGridObject("myGridCont");
	myGrid.setImagePath(config.imagePath);
	myGrid.setHeader(["Column1","Column2","Column3"]);
	myGrid.init();
		
	// initializing on cell 
	
	var myGrid = appLayout.cells("a").attachGrid();
	myGrid.setImagePath(config.imagePath);
	myGrid.setHeader(["Column1","Column2","Column3"]);
	myGrid.init();

	
/*
 * methods
 */ 
	
	// attachGrid
	
	var myGrid = appLayout.cells("a").attachGrid();

	// setImagePath

	myGrid.setImagePath(config.imagePath);
	
	// setHeader
	
	myGrid.setHeader(["Column1","Column2","Column3"]);
	
	// setInitWidths
	
	myGrid.setInitWidths("125,95,*");
	
	// setColAlign
	
	myGrid.setColAlign("right,center,left");

	// init
	
	myGrid.init();
	
	// addRow
	
	myGrid.addRow(1, ["test1","test2","test3"]);
	myGrid.addRow(2, ["test1","test2","test3"]);
	
	// setColTypes
	
	myGrid.setColTypes("ro,ro,ro");
	
	// getSelectedRowId
	
	myGrid.getSelectedRowId();
	
	// clearSelection
	
	myGrid.clearSelection();
	
	// clearAll
	
	myGrid.clearAll();
	
	// parse

	myGrid.parse(data,"json");

/*
 * events
 */ 
 
 	// onRowDblClicked
 	
 	myGrid.attachEvent("onRowDblClicked", function(rowId){
 		console.log(rowId);
 	});
 	
 	// onRowSelect
 	
 	myGrid.attachEvent("onRowSelect", function(rowId){
 		console.log(rowId);
 	});
 	
/*
 * testing
 */ 
 
 // create users
 storage.createUser({firstName: "George", dob: new Date("1991") });
 storage.createUser({firstName: "Steve", dob: new Date("1982") });
 
 // reset page
 localStorage.clear();
 
 

