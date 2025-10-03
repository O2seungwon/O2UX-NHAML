(function() {
	try {
		var promiseObj = WebSquare.startApplication();
	    promiseObj.then( async function(resolve, reject) {
	    	let _fetch = await fetch("/frame/data/inspection.json");
	    	if (_fetch.ok) { 
	    		let res = await _fetch.json();
	    		
	    		if (res.is_inspection === true) {
	    			location.href = "/update.html";
	    		}
	    	}
	    });
	} catch (e) {
		location.href = "/update.html?force";
	}
    
})();