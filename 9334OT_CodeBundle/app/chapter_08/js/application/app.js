var config = {
    imagePath: "js/dhtmlx/imgs/",
    iconPath: ""
}
var callbacks = {
    // Toolbar
    addClick: function(){
    	callbacks.showPopup();    	
    },
    removeClick: function(){
    	storage.removeUser(appGrid.getSelectedRowId());
    },
    editClick: function(userId){
    	// get user
    	var user = storage.getUser(userId);
    	// load user into popup
    	appForm.setFormData(user);
    	// show popup
    	callbacks.showPopup();
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
		appPopup.setModal(1);
		appPopup.show();
		appForm.setItemFocus("firstName");
    },
    hidePopup: function(){
		appPopup.setModal(0);
		appPopup.hide();
		appForm.clear();
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

// Popup
var appPopup;
dhtmlxEvent(window,"load",function(){
	// create popup
	var win = new dhtmlXWindows();
	win.setImagePath(config.imagePath);
	appPopup = win.createWindow(1,null,null,400,300);
	appPopup.setText("User Add/Edit");
	appPopup.centerOnScreen();	
	// events
	appPopup.attachEvent("onClose", callbacks.hidePopup);
	// hide popup
	appPopup.hide();
});

// Form
var appForm;
dhtmlxEvent(window,"load", function(){
	// create form
	appForm = appPopup.attachForm([
		// settings
		{
			type: "settings", position: "label-left",
			labelWidth: 130, inputWidth: 120
		},
		// id
		{
			type: "hidden", name: "id"
		},
		// firstName
		{
			type: "input", name: "firstName",
			required: true, label: "First Name:"
		},
		// middleInitial
		{
			type: "input", name: "middleInitial",
			label: "Middle Initial:", inputWidth: 50
		},
		// lastName
		{
			type: "input", name: "lastName",
			required: true, label: "Last Name:"
		},
		// dob
		{
			type: "calendar", enableTime: false,
			dateFormat: "%n-%j-%Y", name: "dob",
			required: true, label: "Date of Birth:",
			inputWidth: 80
		},
		// email
		{
			type: "input", name: "email", required: true,
			validate: "ValidEmail", label: "Email:"
		},
		// active
		{
			type: "checkbox", name: "active",
			label: "Active:"
		},
		// buttons
		{
			type: "block",
			width: 300,
			list: [
				{
					type: "button", value: "Save", name: "save"
				},
				{
					type: "newcolumn"
				},
				{
					type: "button", value: "Cancel", name: "cancel"
				}
			]
		}		
	]);
	
	// enable validation
	appForm.enableLiveValidation(true);
	
	// set event
	appForm.attachEvent("onButtonClick", function(btnName){
		// save or cancel
		if(btnName == "cancel"){
			callbacks.hidePopup();
		}else if(appForm.validate()){
			var formData = appForm.getFormData();
			if(formData.id){
				storage.updateUser(formData);
			}else{
				storage.createUser(formData);
			}
			callbacks.hidePopup();
		}
	});
});
