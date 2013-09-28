'use strict';

(function(window){

    var isMobile = function() {
      return navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/);
    }

    require.config({
        baseUrl: 'js/',
        paths: {
            'domReady': '../vendors/domReady',
            'cordova': (isMobile()) ?
                        ['../cordova']
                        :
                        ['bridge']
        }
    });

    require(['cordova', 'domReady'],
        function(cordova, domReady) {

        domReady(function () {
            console.log("The DOM is ready - waiting for the device");
            document.addEventListener("deviceready", startWhenReady, false);
        });

        function startWhenReady(){
            console.log("dom and device ready : we can start...");
            var id = 'deviceready';
            var parentElement = document.getElementById(id);
            var listeningElement = parentElement.querySelector('.listening');
            var receivedElement = parentElement.querySelector('.received');

            listeningElement.setAttribute('style', 'display:none;');
            receivedElement.setAttribute('style', 'display:block;');

            console.log('Received Event: ' + id);
        };

    });

})(window);