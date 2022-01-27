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
            console.log('data');
            console.log(data);
            console.log('data[siteLog]');
            console.log(data['siteLog']);
            if (data['siteLog'][activeURL]) {
                data['siteLog'][activeURL]++;
            } else {
                data['siteLog'][activeURL] = 1;
            }
            chrome.storage.sync.set({ 'siteLog': data['siteLog'] });
            console.log(data);
        });
        
    });
});



