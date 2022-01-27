let siteLog = {};

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ 'siteLog': siteLog });
    console.log(`Site log created: ${siteLog}`);
});

let prevURL;
let startTime = 0;

chrome.tabs.onActivated.addListener(function (activeInfo) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        var activeURL = activeTab.url.match("\/\/(.*?)\/")[1];
        console.log(activeURL);
        
        chrome.storage.sync.get('siteLog', function (data) {
            if (prevURL != undefined) {
              if (data['siteLog'][prevURL]) {
                  data['siteLog'][prevURL] += (Date.now() - startTime);
                  // Add a new div for this item
              } else {
                  data['siteLog'][prevURL] = (Date.now() - startTime);
                  // Update exisiting div for this item
              }
            }

            console.log('Current data...');
            console.log(data['siteLog']);
            chrome.storage.sync.set({ 'siteLog': data['siteLog'] });
            prevURL = activeURL;
            startTime = Date.now();
        });
        
    });
});



