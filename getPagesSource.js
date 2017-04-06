
function DOMtoString(document_root) {
    document.onclick = function(e) {
        var html = 'hej',
            node = document_root.firstChild;
            node=node.nextSibling;
        
        var caller = e.target || e.srcElement;
        var sibNum = 0;
        var prevSib = caller.previousElementSibling;
        while (prevSib && sibNum<100) {
            sibNum++;
            prevSib = prevSib.previousElementSibling;
        }

        var parNum = 0;
        var parent = caller.parentNode;

        while (parent && parNum<100) {
            parNum++;
            parent = parent.parentNode;
        }
        //Parent is now #document, with children html -> body -> ..

        //alert( caller.nodeName + " " +parNum.toString() + " "+sibNum.toString());


         var xhr = new XMLHttpRequest();
         xhr.overrideMimeType('text/xml');
    xhr.open("GET", "https://leaditheart.com", true);
    xhr.onreadystatechange = function() {
      if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            alert(xhr.responseXML);
        }
    }
    xhr.send();

        //chrome.storage.local.set({"value": "12"});
    };
}


chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});
