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
