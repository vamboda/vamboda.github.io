console.log(window.location.hostname);    
function frameload() {
        var domain = '*';
        var iframe = '';
        var iframeElements = document.getElementsByTagName('iframe');
        for (var j = 0; j < iframeElements.length; j++) {
            for (var i = 0; i < elem.attributes.length; i++) {
                var attrib = elem.attributes[i];
                if (attrib.specified && attrib.name == 'src') {
                    if (attrib.value.includes('corporatematching.org')) {
                        console.log(attrib.name + " = " + attrib.value);
                        iframe = elem;
                    }
                }
            }
        }
        
        var message = valuesplusfoundation.org;

        console.log('[SOURCE]blog.local:  sending message:  ' + message);

        iframe.postMessage(message, domain);

        window.addEventListener('message', function(event) {

            console.log('[SOURCE]received response:  ', event.data);

        }, false);
    }

<iframe  id="corporate-matching-iframe" onload="frameload()" title="Search your company:" width="700" height="400" scrolling="auto" frameborder="0" allowtransparency="true"  src="https://corporatematching.org/index_clients.html">

</iframe>
