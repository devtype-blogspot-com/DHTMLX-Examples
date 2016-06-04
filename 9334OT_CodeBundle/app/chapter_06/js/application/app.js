var config = {
    imagePath: "js/dhtmlx/imgs/",
    iconPath: ""
}
var callbacks = {
    // Toolbar
    addClick: function(){
    	    	
    },
    removeClick: function(){
    	storage.removeUser(appGrid.getSelectedRowId());
    },
    editClick: function(userId){
    			
    },
    setToolbarItemStates: function(){
    	if(appGrid.getSelectedRowId()){
    		appToolbar.enableItem(3);
    	}else{
    		appToolbar.disableItem(3);
    	}
    },
    // Grid
    refreshGrid: function(){
    	appGrid.clearAll();
    	appGrid.parse(storage.getUserGrid(), "json");
    	callbacks.setToolbarItemStates();
    },
    // Chart
    refreshChart: function(){

    },
    // Popup
    showPopup: function(){

    },
    hidePopup: function(){

    },
    // User Data
    dataChanged: function(){
		callbacks.refreshGrid();
    }
}

// Layout
var appLayout;
dhtmlxEvent(window, "load", function(){
	appLayout = new dhtmlXLayoutObject(document.body, "2U");
	appLayout.cells("a").hideHeader();
	appLayout.cells("b").setText("User Chart");
});

// Toolbar
var appToolbar;
dhtmlxEvent(window, "load", function(){
	// create toolbar
	appToolbar = appLayout.cells("a").attachToolbar({
		items: [
			{ type: "button", id: 1, text: "add" },
			{ type: "separator", id: 2 },
			{ type: "button", id: 3, text: "remove" },
			{ type: "separator", id: 4 },
		]
	});
	// attach toolbar events
	appToolbar.attachEvent("onClick", function(id){
		switch(id){
			case "1": callbacks.addClick(); break;
			case "3": callbacks.removeClick(); break;
			default: break;
		}
	});
});

// Grid
var appGrid;
dhtmlxEvent(window, "load", function(){
	// create grid
	appGrid = appLayout.cells("a").attachGrid();	
	appGrid.setHeader(["ID","First Name","MI","Last Name","DOB","Email","Active"]);
	appGrid.setColTypes("ro,ro,ro,ro,ro,ro,ro");
	appGrid.setInitWidths("35,*,35,*,75,*,55");
	appGrid.setColAlign("center,left,center,left,center,left,center");
	appGrid.setImagePath(config.imagePath);
	appGrid.init();
	
	// attach grid events
	appGrid.attachEvent("onRowDblClicked", function(rowId){
		callbacks.editClick(rowId);	
	});
	appGrid.attachEvent("onRowSelect", function(){
		callbacks.setToolbarItemStates();	
	});
	// reset grid and load it with data
	callbacks.refreshGrid();
});
