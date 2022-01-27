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
            //let parent = document.getElementById('main-table');
            console.log()
            if (prevURL != undefined) {
              let visitLength = Date.now() - startTime;
              if (data['siteLog'][prevURL]) {
                  data['siteLog'][prevURL] += visitLength;
                  //let currentRow = document.getElementById(prevURL);
                  //currentRow.innerHTML = `<div>${prevURL}</div><div>${data['siteLog'][prevURL]}</div>`
              } else {
                  data['siteLog'][prevURL] = visitLength;
              }
            }

            chrome.storage.sync.set({ 'siteLog': data['siteLog'] });
            prevURL = activeURL;
            startTime = Date.now();
        });
        
    });
});



