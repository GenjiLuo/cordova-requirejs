'use strict';

(function(document){

	function createEvent(type, data) {
		var event = document.createEvent('Events');
		event.initEvent(type, false, false);
		if (data) {
			for (var i in data) {
				if (data.hasOwnProperty(i)) {
					event[i] = data[i];
				}
			}
		}
		return event;
	}

	if(typeof window.console === "undefined") {
		window.console = {
			log:function(){}
		};
	}

	console.log('bridge!');

	setTimeout(function(){
		var evt = createEvent('Events', {});
		evt.initEvent('deviceready',false,false);
		document.dispatchEvent(evt);
	}, 500);

})(document);