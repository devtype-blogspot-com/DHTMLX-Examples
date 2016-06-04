var config = {
    imagePath: "js/dhtmlx/imgs/",
    iconPath: ""
}
var callbacks = {
    // Toolbar
    addClick: function(){
    	    	
    },
    removeClick: function(){
    			
    },
    editClick: function(userId){
    			
    },
    setToolbarItemStates: function(){
    	
    },
    // Grid
    refreshGrid: function(){
    	
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

