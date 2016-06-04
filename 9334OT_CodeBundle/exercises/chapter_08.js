// formology, the art of creating forms via code. Not really. I just made that up.

/*
 * create a form
 */ 
	
	// initializing by object literal
	
	var myForm = appPopup.attachForm([
		{
			type: "settings",
			position: "label-left",
			labelWidth: 100
		},
		{
			type: "input",
			label: "No name:",
			inputWidth: 50
		},
		{
			type: "input",
			name: "input1",
			label: "Some Label:",
			required: true
		},
		{
			type: "checkbox",
			name: "checkbox1",
			label: "Yes?"
		},
		{
			type: "calendar",
			name: "mydate",
			label: "date:"
		},
		{
			type: "select",
			name: "myselect",
			label: "Select One:",
			options: [
				{ text: "Option1", value: 1 },
				{ text: "Option2", value: 2 }
			]
		},
		{
			type: "button",
			name: "myButton1",
			value: "Click Me"
		},
		{
			type: "block",
			list: [
				{ type: "button", value: "Button Left" },
				{ type: "newcolumn", offset: 55 },
				{ type: "button", value: "Button Right" }
			]
		}
	]);
	
		
	
	
/*
 * methods
 */ 
	
	// setItemFocus
	
	myForm.setItemFocus("input1");
	
	// validate
	
	myForm.validate();
	
	// clear
	
	myForm.clear();
	
	// enableLiveValidation
	
	myForm.enableLiveValidation(true);
	
	// setFormData
	
	myForm.setFormData({ input1: "Hello!" });
	
	// getFormData
	
	myForm.getFormData();
	

/*
 * tests
 */

	localStorage.clear();
	

