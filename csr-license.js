console.log(window.location.hostname); 

var iframe = document.createElement('iframe');
iframe.src = "https://corporatematching.org/index_clients.html";
iframe.title="Search your company:"
iframe.setAttribute("id", "corporate-matching-iframe");
iframe.width="100%";
iframe.height="100%";
ifraem.frameBorder=0;
document.body.appendChild(iframe);

iframe.onload = function() {
        var domain = '*';
        // var iframe = '';
//         var iframeElements = document.getElementsByTagName('iframe');
//         for (var j = 0; j < iframeElements.length; j++) {
//         var elem=iframeElements[j];
//             for (var i = 0; i < elem.attributes.length; i++) {
//                 var attrib = elem.attributes[i];
//                 if (attrib.specified && attrib.name == 'src') {
//                     if (attrib.value.includes('corporatematching.org')) {
//                         console.log(attrib.name + " = " + attrib.value);
//                         iframe = elem;
//                     }
//                 }
//             }
//         }
        var iframe = document.getElementById('corporate-matching-iframe').contentWindow;
        var message = "valuesplusfoundation.org";

        console.log('[SOURCE]blog.local:  sending message:  ' + message);

        iframe.postMessage(message, domain);

        window.addEventListener('message', function(event) {

            console.log('[SOURCE]received response:  ', event.data);

        }, false);
    };

