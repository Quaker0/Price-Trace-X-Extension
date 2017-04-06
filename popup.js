
/*chrome.storage.local.set({"value": "12"}, function() {    
	chrome.storage.local.get("value", function(data) {
      document.write("data: "+data["value"]);
    });
  });
  */

  chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    request.source;
  }
});

function onWindowLoad() {

  var message = document.querySelector('#message');

  chrome.tabs.executeScript(null, {
    file: "getPagesSource.js"
  }, function() {
    if (chrome.runtime.lastError) {
      message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }
  });
}


window.onload = onWindowLoad;