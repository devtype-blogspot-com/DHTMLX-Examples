// CHEERS!!!! Welcome to chapter 7 exercise code (glad you joined us)!!!!

/*
 * create a window
 */ 
	
	// initializing by object literal
	
	var myWindows = new dhtmlXWindows({
		image_path: config.imagePath,
		wins: [
			{
				id: "w1",
				height: 200,
				width: 200,
				text: "One"
			},
			{
				id: "w2",
				height: 200,
				width: 200,
				text: "Two",
				left: 20,
				top: 20				
			},
			{
				id: "w3",
				height: 200,
				width: 200,
				text: "Three",
				left: 40,
				top: 40
			}
		]
	});	
		
	// initializing by methods
	
	var myWindows = new dhtmlXWindows();
	myWindows.setImagePath(config.imagePath);
	
/*
 * methods
 */ 
	
	// createWindow
	
	var myPopup = myWindows.createWindow("w1",null,null,200,200);
	
	// setDimension
	
	myPopup.setDimension(300,300);
	
	// denyResize
	
	myPopup.denyResize();
	
	// allowResize
	
	myPopup.allowResize();
	
	// centerOnScreen
	
	myPopup.centerOnScreen();
	
	// setModal
	
	myPopup.setModal(true);
	
	myPopup.setModal(false);
	
	// hide
	
	myPopup.hide();		
	
	// show
	
	myPopup.show();
	
	// setText
	
	myPopup.setText("My Popup Window!");
	
	// hideHeader
	
	myPopup.hideHeader();
	
	// showHeader
		
	myPopup.showHeader();
	
/*
 * events
 */ 
 
 	// onClose
 	
 	myPopup.attachEvent("onClose", function(){
 		console.log("close clicked");
 	});
 	
 	myPopup.detachAllEvents();
 	myPopup.attachEvent("onClose", function(){
 		console.log("close clicked again");
 		return true;
 	});
 
 

