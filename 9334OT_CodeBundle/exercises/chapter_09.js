// An ancient wise man once said "Wet birds to not fly at night"

/*
 * create chart
 */ 
	var myChart = appLayout.cells("b").attachChart({});

/*
 * methods 
 */

	// add
	
	myChart.add({ name: "Steve", age: 45, profileViews: 83 });
	myChart.add({ name: "John", age: 27, profileViews: 115 });
	myChart.add({ name: "Ashley", age: 34, profileViews: 225 });
	
	// define
	
	myChart.define("value", "#profileViews#");
	myChart.refresh();
	
	myChart.define("label", "#name#(#profileViews#)");
	myChart.refresh();
	
	myChart.define("padding", 100);
	myChart.refresh();
	
	myChart.define("view", "bar");
	myChart.refresh();
	
	myChart.define("label", false);
	myChart.define("padding", 50);
	myChart.define("xAxis", {
		title: "Names",
		template: "#name#",
		lines: false
	});
	myChart.define("tooltip", "Views (#profileViews#)");
	myChart.refresh();
	
	// addSeries
	
	myChart.addSeries({
		value: "#age#",
		color: "purple",
		tooltip: "Age (#age#)"
	});
	myChart.refresh();
	
	// idByIndex
	
	var steveDataId = myChart.idByIndex(0);
	
	// get
		
	var steveData = myChart.get(steveDataId);
	
	steveData.name = "Steven";
	myChart.refresh();

/*
 * events 
 */

	// onItemClick
	
	myChart.attachEvent("onItemClick", function(id){
		alert("This is data for "+myChart.get(id).name);
	});

/*
 * tests
 */

	localStorage.clear();
	
	

