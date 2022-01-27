let siteLog = {};

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ 'siteLog': siteLog });
    console.log(`Site log created: ${siteLog}`);
});

chrome.tabs.onActivated.addListener(function (activeInfo) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        var activeURL = activeTab.url.match("\/\/(.*?)\/")[1];
        console.log(activeURL);

        chrome.storage.sync.get('siteLog', function (data) {
            if (data[activeURL]) {
                data[activeURL]++;
            } else {
                data[activeURL] = 1;
            }
            console.log(data);
        });
        
    });
});



