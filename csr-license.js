console.log(window.location.hostname); 

var iframe = document.createElement('iframe');
iframe.src = "https://corporatematching.org/index_clients.html";
iframe.title="Search your company:"
iframe.setAttribute("id", "corporate-matching-iframe");
document.body.appendChild(iframe);
function resizeIFrameToFitContent( iFrame ) {

    iFrame.width  = iFrame.contentWindow.document.body.scrollWidth;
    iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
}
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
    
window.addEventListener('DOMContentReady', function(e) {

    var iFrame = document.getElementById( 'iFrame1' );
    resizeIFrameToFitContent( iFrame );

    // or, to resize all iframes:
    var iframes = document.querySelectorAll("corporate-matching-iframe");
    for( var i = 0; i < iframes.length; i++) {
        resizeIFrameToFitContent( iframes[i] );
    }
} );

