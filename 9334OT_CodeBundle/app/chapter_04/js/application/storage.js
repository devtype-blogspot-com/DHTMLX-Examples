var storage = {
    // Storage methods
    lastStoredId : localStorage.getItem("lastStoredId") ? localStorage.getItem("lastStoredId") : 0,
    setDateFormat : function(date) {
        var d = (date.getMonth() + 1);
        d += "-" + date.getDate();
        d += "-" + date.getFullYear();
        return d;
    },
    // User Data
    createUser : function(user) {
        localStorage.setItem("lastStoredId", ++storage.lastStoredId);
        user.id = storage.lastStoredId;
        user.dob = storage.setDateFormat(user.dob);
        localStorage.setItem(user.id, JSON.stringify(user));
        callbacks.dataChanged();
    },
    getUser : function(id) {
        var user = localStorage.getItem(id);
        return (user) ? JSON.parse(user) : false;
    },
    updateUser : function(user) {
        user.dob = storage.setDateFormat(user.dob);
        localStorage.setItem(user.id, JSON.stringify(user));
        callbacks.dataChanged();
    },
    removeUser : function(id) {
        localStorage.removeItem(id);
        callbacks.dataChanged();
    },
    // Grid Data
    getUserGrid : function() {
        var rows = [];
        for (var i = 0; i < localStorage.length; i++) {
            var storageKey = localStorage.key(i);
            if (storageKey != "lastStoredId") {
                var row = localStorage.getItem(storageKey);
                row = JSON.parse(row);
                row = storage.gridRow(row);
                rows.push(row);
            }
        }
        return {
            "rows" : rows,
            "total_count" : rows.length
        }
    },
    gridRow : function(user) {
        var data = [];
        data.push(user.id);
        data.push(user.firstName);
        data.push(user.middleInitial);
        data.push(user.lastName);
        data.push(user.dob);
        data.push(user.email);
        data.push((user.active) ? "Yes" : "No");
        return {
            "id" : user.id,
            "data" : data
        }
    },
    // Chart Data
    getUserBarChart : function() {
        var items = [];
        for (var i = 0; i < localStorage.length; i++) {
            var storageKey = localStorage.key(i);
            if (storageKey != "lastStoredId") {
                var item = localStorage.getItem(storageKey);
                item = JSON.parse(item);
                item = storage.barChartItem(item);
                items.push(item);
            }
        }
        return items;
    },
    barChartItem : function(user) {  
    	var getDateParts = function(date){
    		return {
    			d: date.getDate(), 
    			m: date.getMonth()+1, 
    			y: date.getFullYear()
    		}
    	}
    	var date = getDateParts(new Date());
    	var dob = getDateParts(new Date(user.dob));
    	var age = date.y - dob.y;        	
    	 
    	if(dob.m < date.m){
    		age--;
    	}    		
    	if(dob.m == date.m && dob.d > date.d){
    		age--;
    	}
    		
        return {
            "id" : user.id,
            "age" : age,
            "active": user.active,
            "name" : user.firstName
        }
    }
}